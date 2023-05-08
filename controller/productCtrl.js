const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
const slugify = require('slugify')
// create a product

const createProduct = asyncHandler(async (req, res) => {
  try {
    if(req.body.title){
        req.body.slug= slugify(req.body.title)
    }
    const newProduct = await Product.create(req.body);
    res.json(newProduct );
  } catch (error) {
    throw new Error(error)
  }
});

// get a single product

const getaProduct = asyncHandler(async(req,res)=>{
    const {id}= req.params
try {
    const getProduct= await Product.findById(id)
    res.json(getProduct)
} catch (error) {
    throw new Error(error)
}
})

// get all products

const getAllProducts = asyncHandler(async(req,res)=>{
    try {
        const Allproducts = await Product.find()
        res.json(Allproducts)
    } catch (error) {
        throw new Error(error)
    }
})

// Update product

const updateProduct = asyncHandler(async(req,res)=>{
    const {id} = req.params
    try {
        if(req.body.title){
            req.body.slug = slugify(req.body.title)
        }
        const updateProduct = await Product.findByIdAndUpdate(id,req.body,{new:true})
        res.json(updateProduct)
    } catch (error) {
        throw new Error(error)
    }
})
const deleteProduct = asyncHandler(async(req,res)=>{
    const {id} = req.params
    try {
        const deleteProduct = await Product.findByIdAndDelete(id)
        res.json(deleteProduct)
    } catch (error) {
        throw new Error(error)
    }
})

module.exports = { createProduct ,getaProduct,getAllProducts,updateProduct,deleteProduct};
