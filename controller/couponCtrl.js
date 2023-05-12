const asyncHandler = require("express-async-handler");
const Coupon = require('../models/couponModel')
const createCoupon = asyncHandler(async(req,res)=>{
try {
    const newCoupon = await Coupon.create(req.body)
    res.json(newCoupon)
} catch (error) {
    throw new Error(error)
}
})

module.exports = {createCoupon}