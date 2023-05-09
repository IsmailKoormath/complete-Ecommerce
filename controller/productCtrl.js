const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
const slugify = require("slugify");
// create a product

const createProduct = asyncHandler(async (req, res) => {
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const newProduct = await Product.create(req.body);
    res.json(newProduct);
  } catch (error) {
    throw new Error(error);
  }
});

// get a single product

const getaProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getProduct = await Product.findById(id);
    res.json(getProduct);
  } catch (error) {
    throw new Error(error);
  }
});

// get all products

const getAllProducts = asyncHandler(async (req, res) => {
  try {
    //filter the products
    const queryObj = { ...req.query };
    const excludeFields = ["page", "sort", "limit", "fields"];
    excludeFields.forEach((el) => delete queryObj[el]);

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    let query = Product.find(JSON.parse(queryStr));

    // sorting

    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      query = query.sort(sortBy);
    } else {
      query = query.sort("-createdAt");
    }

    // limiting the fields

    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      query = query.select(fields);
    } else {
      query = query.select("");
    }

    const product = await query;
    // const Allproducts = await Product.find(queryObj);
    res.json(product);
  } catch (error) {
    throw new Error(error);
  }
});

// Update product

const updateProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const updateProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updateProduct);
  } catch (error) {
    throw new Error(error);
  }
});

// Delte product

const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const deleteProduct = await Product.findByIdAndDelete(id);
    res.json(deleteProduct);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createProduct,
  getaProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
};
