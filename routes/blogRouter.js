const express = require('express')
const { createBlog, updateBlog, getaBlog } = require('../controller/blogCtrl')
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

const router= express.Router()

router.post('/',authMiddleware,isAdmin, createBlog)
router.put('/:id',authMiddleware,isAdmin,updateBlog)
router.get('/:id',getaBlog)

module.exports = router