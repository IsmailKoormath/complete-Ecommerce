const asyncHandler = require("express-async-handler");
const ProdCategory = require("../models/prodCategoryModel");
const validateMongodbId = require("../utils/validateMongodbId");

// create product category

const createprodCategory = asyncHandler(async (req, res) => {
  try {
    const addProdCategoty = await ProdCategory.create(req.body);
    res.json(addProdCategoty);
  } catch (error) {
    throw new Error(error);
  }
});

// update product category

const updateprodCategory = asyncHandler(async (req, res) => {
    const {id}= req.params
    validateMongodbId(id)
  try {
    const updateCategoty = await ProdCategory.findByIdAndUpdate(id,req.body,{
        new:true
    })
    res.json(updateCategoty);
  } catch (error) {
    throw new Error(error);
  }
});

// Delete product Category

const deletprodCategory = asyncHandler(async (req, res) => {
    const {id}= req.params
    validateMongodbId(id)
  try {
    const deletCategory = await ProdCategory.findByIdAndDelete(id)
    res.json(deletCategory);
  } catch (error) {
    throw new Error(error);
  }
});

// get all category

const getAllprodCategory = asyncHandler(async (req, res) => {
  try {
    const allProdCategoty = await ProdCategory.find();
    res.json(allProdCategoty);
  } catch (error) {
    throw new Error(error);
  }
});

// Get single category

const getaprodCategory = asyncHandler(async (req, res) => {
  const {id} = req.params
  validateMongodbId(id)
  try {
    const getProdCategoty = await ProdCategory.findById(id);
    res.json(getProdCategoty);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {createprodCategory, updateprodCategory ,deletprodCategory,getAllprodCategory,getaprodCategory};
