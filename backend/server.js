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

// Admin Schema
const adminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const Admin = mongoose.model("Admin", adminSchema);

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

// Create blog post route
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

      let parsedCategories = [];
      if (categories) {
        try {
          parsedCategories = typeof categories === 'string' ? JSON.parse(categories) : categories;
        } catch (e) {
          parsedCategories = categories || [];
        }
      }

      if (parsedCategories.length) {
        const categoriesExist = await Category.find({ _id: { $in: parsedCategories } });
        if (categoriesExist.length !== parsedCategories.length) {
          return res.status(400).json({ error: 'One or more invalid categories' });
        }
      }

      const slug = req.body.slug || await generateUniqueSlug(title);

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

      if (req.files?.featuredImage?.[0]) {
        blogData.featuredImage = req.files.featuredImage[0].path;
      }

      if (req.files?.contentImages) {
        blogData.contentImages = req.files.contentImages.map(file => file.path);
      }

      const blog = new Blog(blogData);
      await blog.save();

      const populatedBlog = await Blog.findById(blog._id).populate('categories');

      res.status(201).json({
        message: "Blog post created successfully",
        blog: populatedBlog
      });

    } catch (error) {
      console.error("Blog creation error:", error);

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

// Update blog post
app.put("/api/blogs/:id", authenticateAdmin, (req, res, next) => {
  upload(req, res, async (err) => {
    if (err) return res.status(400).json({ error: err.message });

    try {
      const { title, content, metaDescription, keywords, categories = [], author, publishedAt, status, slug } = req.body;

      if (!title || !content) {
        return res.status(400).json({ error: "Title and content are required" });
      }

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

// Get all blogs
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

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  message: { type: String },
  submittedAt: { type: Date, default: Date.now },
});

const Contact = mongoose.model("Contact", contactSchema);

// Email transporter configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Contact Form API
app.post("/api/send-contact", async (req, res) => {
  const { name, email, phone, message } = req.body;
  const contact = new Contact({ name, email, phone, message });
  await contact.save();

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage:\n${message}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong></p>
      <div style="white-space: pre-line">${message}</div>
      <p><small>Sent on: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</small></p>
    `,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ message: "Error sending email", error: error.message });
    }
    res.status(200).json({ message: "Email sent and contact saved successfully" });
  });
});

// Admin API to get all contacts
app.get("/api/contacts", authenticateAdmin, async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ submittedAt: -1 });
    res.json(contacts);
  } catch (error) {
    console.error("Contact fetch error:", error);
    res.status(500).json({ error: error.message });
  }
});

// Newsletter Schema
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
  server.listen(PORT, () => {
    console.log(`🚀 Server running on port ${process.env.BACKEND_URL}`);
  });
});