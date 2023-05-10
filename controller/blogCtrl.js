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
    res.json(updateBlog);
  } catch (error) {
    throw new Error(error);
  }
});

// Get a blog

const getaBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getBlog = await Blog.findById(id);
    const updateViews = await Blog.findByIdAndUpdate(
      id,
      {
        $inc: { numViews: 1 },
      },
      {
        new: true,
      }
    );
    res.json(getBlog);
  } catch (error) {
    throw new Error(error);
  }
});

// get all blogs

const getAllBlogs = asyncHandler(async (req, res) => {
  try {
    const getBlogs = await Blog.find();
    res.json(getBlogs);
  } catch (error) {
    throw new Error(error);
  }
});

// delete a blog

const deleteaBlog = asyncHandler(async (req, res) => {
    const {id} = req.params
    try {
      const deleteBlog = await Blog.findByIdAndDelete(id);
      res.json(deleteBlog);
    } catch (error) {
      throw new Error(error);
    }
  });

module.exports = { createBlog, updateBlog, getaBlog, getAllBlogs,deleteaBlog };