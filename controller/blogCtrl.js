const asyncHandler = require("express-async-handler");
const Blog = require("../models/blogModel");

// create a new blog

const createBlog = asyncHandler(async (req, res) => {
  try {
    const newBlog = await Blog.create(req.body);
    res.json(newBlog);
  } catch (error) {
    throw new Error(error);
  }
});

// update a blog

const updateBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const updateBlog = await Blog.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updateBlog)
  } catch (error) {
    throw new Error(error)
  }
});

module.exports = { createBlog,updateBlog };
