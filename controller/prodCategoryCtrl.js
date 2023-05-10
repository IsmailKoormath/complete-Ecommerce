const asyncHandler = require("express-async-handler");
const ProdCategory = require("../models/prodCategoryModel");
const createprodCategory = asyncHandler(async (req, res) => {
  try {
    const addProdCategoty = await ProdCategory.create(req.body);
    res.json(addProdCategoty);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = { createprodCategory };
