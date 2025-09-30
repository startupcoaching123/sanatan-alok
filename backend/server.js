const express = require("express");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const http = require("http");
const cors = require("cors");
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const Admin = require("./models/Admin");

const app = express();
const server = http.createServer(app);

// Middleware
app.use(cookieParser());

const allowedOrigins = [
  "http://localhost:5173",
  "http://www.sanatanalok.com",
  "https://www.sanatanalok.com",
  "https://www.sanatanalok.com/",
  "http://www.sanatanalok.com/",
  "https://sanatanalok.com",
  "http://sanatanalok.com/",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1);
  }
};

connectDB();

app.get("/", (req, res) => {
    res.send("API is running...");
});

// Cloudinary Configuration
try {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
  });
  console.log('✅ Cloudinary configured successfully');
} catch (error) {
  console.error('❌ Cloudinary configuration failed:', error);
  process.exit(1);
}

// Multer Configuration for Cloudinary with better error handling
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: (req, file) => {
    return {
      folder: "startupcoaching_blogs",
      allowed_formats: ["jpg", "jpeg", "png"],
      transformation: [{ quality: "auto", fetch_format: "auto" }],
      public_id: `${Date.now()}-${file.originalname.split('.')[0]}`
    };
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5000000 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(file.originalname.toLowerCase());

    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(new Error("Error: Only JPEG, JPG, and PNG images are allowed!"));
  }
}).fields([
  { name: "featuredImage", maxCount: 1 },
  { name: "contentImages", maxCount: 10 }
]);

// Blog Schema
// Blog Schema
const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  featuredImage: { type: String },
  contentImages: [{ type: String }],
  slug: { type: String, unique: true },
  metaDescription: String,
  keywords: [String],
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
  author: { type: String },
  publishedAt: { type: Date },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
  status: { type: String, enum: ['draft', 'published'], default: 'draft' },
});

const Blog = mongoose.model("Blog", blogSchema);

// Category Schema
const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, trim: true },
  createdAt: { type: Date, default: Date.now },
});

const Category = mongoose.model('Category', categorySchema);

const newsletterSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  subscribedAt: {
    type: Date,
    default: Date.now,
  },
});

const Newsletter = mongoose.model("Newsletter", newsletterSchema);


// Middleware to verify JWT
const authenticateAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "No token provided" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const admin = await Admin.findById(decoded.id);
    if (!admin) return res.status(401).json({ message: "Admin not found" });

    req.admin = admin;
    next();
  } catch (error) {
    console.error("Authentication error:", error);
    res.status(401).json({ message: "Invalid token" });
  }
};

app.get('/api/auth/validate', authenticateAdmin, (req, res) => {
  res.json({ valid: true, admin: { id: req.admin._id, username: req.admin.username } });
});

// Admin Login API
app.post("/api/admin/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: "Username and password are required" });
    }

    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({
      token,
      admin: {
        id: admin._id,
        username: admin.username
      }
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

/* ========== CATEGORY APIs ========== */

// Public: Get all categories
app.get('/api/categories', async (req, res) => {
  try {
    const categories = await Category.find().sort({ name: 1 });
    res.json(categories);
  } catch (error) {
    console.error('Category fetch error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Protected: Create a new category
app.post('/api/categories', authenticateAdmin, async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ error: 'Category name is required' });
    }

    const existingCategory = await Category.findOne({ name: name.trim() });
    if (existingCategory) {
      return res.status(400).json({ error: 'Category already exists' });
    }

    const category = new Category({ name: name.trim() });
    await category.save();
    res.status(201).json(category);
  } catch (error) {
    console.error('Category creation error:', error);
    res.status(500).json({ error: error.message });
  }
});

/* ========== BLOG APIs ========== */

// Add this function before the // Create blog post route
const generateUniqueSlug = async (title) => {
  let slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  let uniqueSlug = slug;
  let counter = 1;

  while (await Blog.findOne({ slug: uniqueSlug })) {
    uniqueSlug = `${slug}-${counter}`;
    counter++;
  }
  return uniqueSlug;
};

// Update the // Create blog post route
app.post("/api/blogs", authenticateAdmin, (req, res, next) => {
  upload(req, res, async (err) => {
    if (err) {
      console.error('Upload error:', err);
      return res.status(400).json({ error: err.message });
    }

    try {
      const { title, content, metaDescription, keywords, categories, author, publishedAt, status } = req.body;

      if (!title || !content) {
        return res.status(400).json({ error: "Title and content are required" });
      }

      // Parse categories if it's a JSON string
      let parsedCategories = [];
      if (categories) {
        try {
          parsedCategories = typeof categories === 'string' ? JSON.parse(categories) : categories;
        } catch (e) {
          parsedCategories = categories || [];
        }
      }

      // Verify categories exist (only if categories are provided)
      if (parsedCategories.length) {
        const categoriesExist = await Category.find({ _id: { $in: parsedCategories } });
        if (categoriesExist.length !== parsedCategories.length) {
          return res.status(400).json({ error: 'One or more invalid categories' });
        }
      }

      // Generate slug if not provided
      const slug = req.body.slug || await generateUniqueSlug(title);

      // Prepare blog data
      const blogData = {
        title,
        content,
        slug,
        metaDescription: metaDescription || "",
        keywords: keywords ? keywords.split(",").map(k => k.trim()).filter(k => k) : [],
        categories: parsedCategories,
        author: author || "",
        publishedAt: publishedAt || null,
        status: status || 'draft',
        updatedAt: Date.now()
      };

      // Add image URLs if they exist
      if (req.files?.featuredImage?.[0]) {
        blogData.featuredImage = req.files.featuredImage[0].path;
      }

      if (req.files?.contentImages) {
        blogData.contentImages = req.files.contentImages.map(file => file.path);
      }

      // Create and save blog
      const blog = new Blog(blogData);
      await blog.save();

      // Populate categories for response
      const populatedBlog = await Blog.findById(blog._id).populate('categories');

      res.status(201).json({
        message: "Blog post created successfully",
        blog: populatedBlog
      });

    } catch (error) {
      console.error("Blog creation error:", error);

      // Delete any uploaded images if error occurs
      if (req.files) {
        const deleteImages = async (files) => {
          try {
            await Promise.all(
              files.map(file => cloudinary.uploader.destroy(file.filename))
            );
          } catch (deleteError) {
            console.error("Error cleaning up images:", deleteError);
          }
        };

        if (req.files.featuredImage) {
          await deleteImages(req.files.featuredImage);
        }
        if (req.files.contentImages) {
          await deleteImages(req.files.contentImages);
        }
      }

      res.status(500).json({ error: "Failed to create blog post" });
    }
  });
});

// Get all blogs (public for published, private for drafts)
app.get("/api/blogs", async (req, res) => {
  try {
    const isAdmin = req.headers.authorization?.split(" ")[1];
    const query = isAdmin ? {} : { status: "published" };
    const blogs = await Blog.find(query).populate('categories').sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    console.error("Blog fetch error:", error);
    res.status(500).json({ error: error.message });
  }
});

// Get single blog by slug
app.get("/api/blogs/:slug", async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug, status: "published" }).populate('categories');
    if (!blog) return res.status(404).json({ error: "Blog not found" });
    res.json(blog);
  } catch (error) {
    console.error("Single blog fetch error:", error);
    res.status(500).json({ error: error.message });
  }
});

// Update blog post
app.put("/api/blogs/:id", authenticateAdmin, (req, res, next) => {
  upload(req, res, async (err) => {
    if (err) return res.status(400).json({ error: err.message });

    try {
      const { title, content, metaDescription, keywords, categories = [], author, publishedAt, status, slug } = req.body;

      if (!title || !content) {
        return res.status(400).json({ error: "Title and content are required" });
      }

      // Only validate categories if they're provided
      if (categories.length > 0) {
        const categoriesExist = await Category.find({ _id: { $in: categories } });
        if (categoriesExist.length !== categories.length) {
          return res.status(400).json({ error: 'One or more invalid categories' });
        }
      }

      const updateData = {
        title,
        content,
        metaDescription,
        keywords: keywords ? keywords.split(",").map(k => k.trim()) : [],
        categories,
        author: author || "",
        publishedAt: publishedAt || null,
        status: status || 'draft',
        updatedAt: Date.now(),
      };

      if (slug) updateData.slug = slug;
      if (req.files?.featuredImage?.[0]) updateData.featuredImage = req.files.featuredImage[0].path;
      if (req.files?.contentImages) updateData.contentImages = req.files.contentImages.map(file => file.path);

      const blog = await Blog.findByIdAndUpdate(
        req.params.id,
        { $set: updateData },
        { new: true }
      ).populate('categories');

      if (!blog) return res.status(404).json({ error: "Blog not found" });
      res.json({ message: "Blog updated successfully", blog });
    } catch (error) {
      console.error("Blog update error:", error);
      res.status(500).json({ error: error.message });
    }
  });
});

// Delete blog post
app.delete("/api/blogs/:id", authenticateAdmin, async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({ error: "Blog not found" });

    const deleteImage = async (url) => {
      if (!url) return;
      try {
        const publicId = url.split('/').slice(-2).join('/').split('.')[0];
        await cloudinary.uploader.destroy(publicId);
      } catch (err) {
        console.error("Error deleting image:", err);
      }
    };

    await deleteImage(blog.featuredImage);
    if (blog.contentImages && blog.contentImages.length > 0) await Promise.all(blog.contentImages.map(deleteImage));

    res.json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error("Blog deletion error:", error);
    res.status(500).json({ error: error.message });
  }
});

// Search Blogs API
// Search Blogs API
app.get("/api/blogs/search", async (req, res) => {
  try {
    const { q, category, page = 1, limit = 9 } = req.query;
    let filter = { status: "published" };

    // Add search query filter if provided
    if (q) {
      filter.$or = [
        { title: { $regex: q, $options: "i" } },
        { content: { $regex: q, $options: "i" } },
        { metaDescription: { $regex: q, $options: "i" } },
      ];
    }

    // Add category filter if a valid category ID is provided
    if (category && category !== "") {
      const categoryDoc = await Category.findById(category);
      if (categoryDoc) {
        filter.categories = categoryDoc._id;
      } else {
        return res.json({ blogs: [], total: 0, totalPages: 0 });
      }
    }

    // Convert page and limit to numbers
    const pageNum = parseInt(page, 10) || 1;
    const limitNum = parseInt(limit, 10) || 9;
    const skip = (pageNum - 1) * limitNum;

    // Fetch blogs with pagination
    const blogs = await Blog.find(filter)
      .populate("categories")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limitNum);

    // Get total count for pagination
    const total = await Blog.countDocuments(filter);
    const totalPages = Math.ceil(total / limitNum);

    res.json({
      blogs,
      total,
      totalPages,
    });
  } catch (error) {
    console.error("Search error:", error);
    res.status(500).json({ error: error.message });
  }
});

// Define Contact Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now },
});

const Contact = mongoose.model('Contact', contactSchema);

// Email transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Form Data APIs
app.get('/api/contacts', authenticateAdmin, async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ submittedAt: -1 });
    res.json(contacts);
  } catch (error) {
    console.error('Contact fetch error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Contact Form API
app.post('/api/send-contact', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  // Validate input
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    // Save to MongoDB
    const contact = new Contact({ name, email, phone, subject, message });
    await contact.save();

    // Prepare email
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission: ${subject} from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nSubject: ${subject}\nMessage:\n${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <div style="white-space: pre-line">${message}</div>
        <p><small>Sent on: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</small></p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent and contact saved successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Error processing request', error: error.message });
  }
});

// Define Program Application Schema
const programApplicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  program: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now },
});

const ProgramApplication = mongoose.model('ProgramApplication', programApplicationSchema);

// API to fetch all program applications (for admin)
app.get('/api/program-applications', authenticateAdmin, async (req, res) => {
  try {
    const applications = await ProgramApplication.find().sort({ submittedAt: -1 });
    res.json(applications);
  } catch (error) {
    console.error('Program application fetch error:', error);
    res.status(500).json({ error: error.message });
  }
});

// API to handle program application submission
app.post('/api/free-program-apply', async (req, res) => {
  const { name, email, phone, program } = req.body;

  // Validate input
  if (!name || !email || !phone || !program) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    // Save to MongoDB
    const application = new ProgramApplication({ name, email, phone, program });
    await application.save();

    // Prepare email
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Program Application: ${program} from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nProgram: ${program}\nSubmitted At: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}`,
      html: `
        <h2>New Program Application</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Program:</strong> ${program}</p>
        <p><small>Sent on: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</small></p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Application sent and saved successfully' });
  } catch (error) {
    console.error('Error processing program application:', error);
    res.status(500).json({ message: 'Error processing request', error: error.message });
  }
});


// Newsletter APIs
app.post("/api/newsletter/subscribe", async (req, res) => {
  const { email } = req.body;

  if (!email || typeof email !== "string" || !email.trim()) {
    return res.status(400).json({ message: "Email is required and must be a non-empty string." });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email format." });
  }

  try {
    const existing = await Newsletter.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already subscribed." });
    }

    const newEntry = new Newsletter({ email });
    await newEntry.save();
    res.status(201).json({ message: "Subscribed successfully." });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ message: "Server error." });
  }
});

app.get("/api/newsletter", authenticateAdmin, async (req, res) => {
  try {
    const newsletters = await Newsletter.find().sort({ subscribedAt: -1 });
    res.json(newsletters);
  } catch (error) {
    console.error("Newsletter fetch error:", error);
    res.status(500).json({ message: "Failed to fetch newsletters.", error: error.message });
  }
});


// Start the server
const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  server.listen(PORT, () => { // Use server.listen instead of app.listen
    console.log(`🚀 Server running on port ${process.env.BACKEND_URL}`);
  });
});