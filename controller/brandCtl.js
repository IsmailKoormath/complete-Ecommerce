const asyncHandler = require("express-async-handler");
const Brand = require("../models/brandModel");
const validateMongodbId = require("../utils/validateMongodbId");

// create Brand

const createBrand = asyncHandler(async (req, res) => {
  try {
    const addBrand = await Brand.create(req.body);
    res.json(addBrand);
  } catch (error) {
    throw new Error(error);
  }
});

// update Brand

const updateBrand = asyncHandler(async (req, res) => {
    const {id}= req.params
    validateMongodbId(id)
  try {
    const updateBrand = await Brand.findByIdAndUpdate(id,req.body,{
        new:true
    })
    res.json(updateBrand);
  } catch (error) {
    throw new Error(error);
  }
});

// Delete Brand

const deleteBrand = asyncHandler(async (req, res) => {
    const {id}= req.params
    validateMongodbId(id)
  try {
    const deletBrand = await Brand.findByIdAndDelete(id)
    res.json(deletBrand);
  } catch (error) {
    throw new Error(error);
  }
});

// get all Brand

const getAllBrand = asyncHandler(async (req, res) => {
  try {
    const allBrand = await Brand.find();
    res.json(allBrand);
  } catch (error) {
    throw new Error(error);
  }
});

// Get single Brand

const getaBrand = asyncHandler(async (req, res) => {
  const {id} = req.params
  validateMongodbId(id)
  try {
    const getBrand = await Brand.findById(id);
    res.json(getBrand);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {createBrand, updateBrand ,deleteBrand,getAllBrand,getaBrand};
