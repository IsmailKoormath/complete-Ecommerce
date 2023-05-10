const express = require("express");
const { createprodCategory } = require("../controller/prodCategoryCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();


router.post('/',authMiddleware,isAdmin,createprodCategory)

module.exports = router