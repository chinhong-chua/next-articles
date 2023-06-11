const mongoose = require("mongoose");
// const blogSchema = require("./models/Blog");

// const Blog = require("./models/Blog");

// const User = require('./models/User')

const dbName = "BlogDB";

const connectDB = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(`mongodb://${process.env.MONGODB_URI}/` + dbName, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
