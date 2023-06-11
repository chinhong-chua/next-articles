const express = require("express");
const cors = require("cors");
const db = require("./db");
const useSentry = require("./middlewares/useSentry");

const blogService = require("./controllers/BlogController");

require("dotenv").config();
const app = express();
useSentry().init(app);
app.use(cors());
app.use(express.json());

db();

app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

app.get("/", (req, res) => {
  logger.log(`request coming from ${req.originalUrl}`);
  logger.log(
    `request coming from ${req.hostname} at ${new Date().toLocaleTimeString()}`
  );
  res.status(200).send("Hello from Node Blog Server");
});

// Create a new blog post
app.post("/api/blogs", blogService.createBlog);

// Get all blog posts
app.get("/api/blogs", blogService.getAllBlogs);

// Get a specific blog post by slug
app.get("/api/blogs/:slug", blogService.getBlogBySlug);

// Update a blog post by slug
app.put("/api/blogs/:slug", blogService.updateBlogBySlug);

// Delete a blog post by slug
app.delete("/api/blogs/:slug", blogService.deleteBlogBySlug);

//Ensure controller was initiate before Sentry Error handler
useSentry().handleSentryError(app)

// Start the server
const port = process.env.NODE_PORT || 3011;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
