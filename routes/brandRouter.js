const express = require("express");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const { createBrand, updateBrand, deleteBrand, getAllBrand, getaBrand } = require("../controller/brandCtl");
const router = express.Router();


router.post('/',authMiddleware,isAdmin,createBrand)
router.put('/:id',authMiddleware,isAdmin,updateBrand)
router.delete('/:id',authMiddleware,isAdmin,deleteBrand)
router.get('/',getAllBrand)
router.get('/:id',getaBrand)

module.exports = router