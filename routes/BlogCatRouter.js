const express = require("express");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const { createBlogCategory, updateBlogCategory, deletBlogCategory, getAllblogCategory, getaBlogCategory } = require("../controller/blogCatCtrl");
const router = express.Router();


router.post('/',authMiddleware,isAdmin,createBlogCategory)
router.put('/:id',authMiddleware,isAdmin,updateBlogCategory)
router.delete('/:id',authMiddleware,isAdmin,deletBlogCategory)
router.get('/',getAllblogCategory)
router.get('/:id',getaBlogCategory)

module.exports = router