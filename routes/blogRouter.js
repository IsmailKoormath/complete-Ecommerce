const express = require('express')
const { createBlog, updateBlog, getaBlog, getAllBlogs, deleteaBlog, liketheBlog, disliketheBlog } = require('../controller/blogCtrl')
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

const router= express.Router()

router.get('/:id',getaBlog)
router.get('/',getAllBlogs)
router.put('/likes',authMiddleware,liketheBlog)
router.put('/dislikes',authMiddleware,disliketheBlog)
router.post('/create',authMiddleware,isAdmin, createBlog)
router.put('/:id',authMiddleware,isAdmin,updateBlog)
router.delete('/:id',authMiddleware,isAdmin,deleteaBlog)



module.exports = router