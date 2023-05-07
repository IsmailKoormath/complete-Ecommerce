const User = require('../models/userModel')
const Jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')

const authMiddleware =  asyncHandler(async(req,res,next)=>{
let token
if(req?.headers?.authorization?.startsWith("Bearer")){
    token = req.headers.authorization.split(" ")[1]
    try {
        if(token){
            const decoded = Jwt.verify(token,process.env.JWT_SECRET)
            const user = await User.findById(decoded?.id)
            req.user = user
            next()
        }
    } catch (error) {
        throw new Error(" No Autherized token, please Login again")
    }
}else{
    throw new Error(" There is no token attached to header")
}
})

module.exports = {authMiddleware}