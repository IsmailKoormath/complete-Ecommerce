const asyncHandler = require("express-async-handler");
const ProdCategory = require("../models/prodCategoryModel");
const { trusted } = require("mongoose");

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
  try {
    const updateCategoty = await ProdCategory.findByIdAndUpdate(id,req.body,{
        new:trusted
    })
    res.json(updateCategoty);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {createprodCategory, updateprodCategory };
