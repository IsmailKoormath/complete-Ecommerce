const express =require("express")
const { createuser } = require("../controller/userController")
const router= express.Router()

router.post('/registion',createuser)

module.exports=router

