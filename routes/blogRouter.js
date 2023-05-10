const express = require('express')
const { createBlog } = require('../controller/blogCtrl')
const router= express.Router()

router.post('/',createBlog)

module.exports = router