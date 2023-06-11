const Blog = require("../models/Blog");
// const User = require('../models/User')

// Create a new blog post
async function createBlog(req, res) {
  try {
    const { title, content, author, slug, date, imagePath, minutesRead } =
      req.body;

    const existingBlog = await Blog.findOne({ slug });
    if (existingBlog) {
      res
        .status(400)
        .json({ error: `Slug: ${slug} is already existed, please try again` });
      return;
    }

    const newBlog = new Blog({
      title,
      content,
      author,
      slug,
      date,
      imagePath,
      minutesRead,
    });
    const savedBlog = await newBlog.save();
    res.json(savedBlog);
  } catch (error) {
    console.error("Failed to create blog post", error);
    res.status(500).json({ error: "Failed to create blog post" });
  }
}

// Get all blog posts
async function getAllBlogs(req, res) {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    console.error("Failed to fetch blog posts", error);
    res.status(500).json({ error: "Failed to fetch blog posts" });
  }
}

// Get a specific blog post by slug
async function getBlogBySlug(req, res) {
  try {
    const { slug } = req.params;
    const blog = await Blog.findOne({ slug });
    if (!blog) {
      return res.status(404).json({ error: "Blog post not found" });
    }
    res.json(blog);
  } catch (error) {
    console.error("Failed to fetch blog post", error);
    res.status(500).json({ error: "Failed to fetch blog post" });
  }
}

// Update a blog post by slug
async function updateBlogBySlug(req, res) {
  try {
    const { slug } = req.params;
    const { title, content, author } = req.body;
    const updatedBlog = await Blog.findOneAndUpdate(
      { slug },
      { title, content, author },
      { new: true }
    );
    if (!updatedBlog) {
      return res.status(404).json({ error: "Blog post not found" });
    }
    res.json(updatedBlog);
  } catch (error) {
    console.error("Failed to update blog post", error);
    res.status(500).json({ error: "Failed to update blog post" });
  }
}

// Delete a blog post by slug
async function deleteBlogBySlug(req, res) {
  try {
    const { slug } = req.params;
    const deletedBlog = await Blog.findOneAndDelete({ slug });
    if (!deletedBlog) {
      return res.status(404).json({ error: "Blog post not found" });
    }
    res.json(deletedBlog);
  } catch (error) {
    console.error("Failed to delete blog post", error);
    res.status(500).json({ error: "Failed to delete blog post" });
  }
}

module.exports = {
  createBlog,
  getAllBlogs,
  getBlogBySlug,
  updateBlogBySlug,
  deleteBlogBySlug,
};
