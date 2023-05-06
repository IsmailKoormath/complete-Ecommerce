const express =require("express")
const { createuser, loginUserCtrl } = require("../controller/userController")
const router= express.Router()

router.post('/registion',createuser)
router.post('/login',loginUserCtrl)


module.exports=router

