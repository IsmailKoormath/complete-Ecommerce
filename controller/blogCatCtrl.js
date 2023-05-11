const asyncHandler = require("express-async-handler");
const BlogCategory = require("../models/blogCatModel");
const validateMongodbId = require("../utils/validateMongodbId");

// create product category

const createBlogCategory = asyncHandler(async (req, res) => {
  try {
    const addBlogCategoty = await BlogCategory.create(req.body);
    res.json(addBlogCategoty);
  } catch (error) {
    throw new Error(error);
  }
});

// update product category

const updateBlogCategory = asyncHandler(async (req, res) => {
    const {id}= req.params
    validateMongodbId(id)
  try {
    const updateCategoty = await BlogCategory.findByIdAndUpdate(id,req.body,{
        new:true
    })
    res.json(updateCategoty);
  } catch (error) {
    throw new Error(error);
  }
});

// Delete product Category

const deletBlogCategory = asyncHandler(async (req, res) => {
    const {id}= req.params
    validateMongodbId(id)
  try {
    const deletCategory = await BlogCategory.findByIdAndDelete(id)
    res.json(deletCategory);
  } catch (error) {
    throw new Error(error);
  }
});

// get all category

const getAllblogCategory = asyncHandler(async (req, res) => {
  try {
    const allCategoty = await BlogCategory.find();
    res.json(allCategoty);
  } catch (error) {
    throw new Error(error);
  }
});

// Get single category

const getaBlogCategory = asyncHandler(async (req, res) => {
  const {id} = req.params
  validateMongodbId(id)
  try {
    const getBlogCategoty = await BlogCategory.findById(id);
    res.json(getBlogCategoty);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {createBlogCategory, updateBlogCategory ,deletBlogCategory,getAllblogCategory,getaBlogCategory};
