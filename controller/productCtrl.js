const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

// create a product

const createProduct = asyncHandler(async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.json(product);
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

module.exports = { createProduct ,getaProduct};
