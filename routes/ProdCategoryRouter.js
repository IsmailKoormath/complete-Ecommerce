const express = require("express");
const { createprodCategory, updateprodCategory } = require("../controller/prodCategoryCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();


router.post('/',authMiddleware,isAdmin,createprodCategory)
router.put('/:id',authMiddleware,isAdmin,updateprodCategory)

module.exports = router