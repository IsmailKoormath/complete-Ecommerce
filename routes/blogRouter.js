const express = require('express')
const { createBlog, updateBlog, getaBlog, getAllBlogs, deleteaBlog } = require('../controller/blogCtrl')
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

const router= express.Router()

router.post('/create',authMiddleware,isAdmin, createBlog)
router.put('/:id',authMiddleware,isAdmin,updateBlog)
router.get('/:id',getaBlog)
router.get('/',getAllBlogs)
router.delete('/:id',authMiddleware,isAdmin,deleteaBlog)

module.exports = router