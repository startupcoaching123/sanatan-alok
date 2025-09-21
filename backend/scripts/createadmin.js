const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config({ path: "../.env" }); // load env from backend root


// Import the server.js file to access the Admin model
const Admin = require("../models/Admin"); // Adjust the path if your file is named differently (e.g., app.js)

async function createAdmin() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB");

    // Admin details
    const username = "admin"; // Change this to your desired username
    const password = "1@Mantrenova@1"; // Change this to your desired password

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ username });
    if (existingAdmin) {
      console.log("❌ Admin already exists. Update the username or remove the existing admin first.");
      return;
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new admin
    const admin = new Admin({
      username,
      password: hashedPassword,
    });

    await admin.save();
    console.log("✅ Admin created successfully with username:", username);
  } catch (error) {
    console.error("❌ Error creating admin:", error.message);
  } finally {
    mongoose.connection.close();
    console.log("✅ MongoDB connection closed");
  }
}

createAdmin();