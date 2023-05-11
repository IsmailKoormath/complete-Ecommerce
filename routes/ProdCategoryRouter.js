const express = require("express");
const { createprodCategory, updateprodCategory, deletprodCategory, getAllprodCategory, getaprodCategory } = require("../controller/prodCategoryCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();


router.post('/',authMiddleware,isAdmin,createprodCategory)
router.put('/:id',authMiddleware,isAdmin,updateprodCategory)
router.delete('/:id',authMiddleware,isAdmin,deletprodCategory)
router.get('/',getAllprodCategory)
router.get('/:id',getaprodCategory)

module.exports = router