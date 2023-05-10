const asyncHandler = require("express-async-handler");
const Blog = require("../models/blogModel");

// create a new blog

const createBlog = asyncHandler(async(req,res)=>{
    try {
        const newBlog = await Blog.create(req.body)
        res.json(newBlog)
    } catch (error) {
        throw new Error(error)
    }
})

module.exports = {createBlog}