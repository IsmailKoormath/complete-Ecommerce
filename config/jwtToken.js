const Jwt= require('jsonwebtoken')

const generateToken = (id)=>{
    return Jwt.sign({id},process.env.JWT_SECRET,{expiresIn:"3d"})
}

module.exports = {generateToken}