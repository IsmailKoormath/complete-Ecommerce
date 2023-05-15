const cloudinary = require('cloudinary')

cloudinary.config({
cloud_name:process.env.CLOUDNARY_NAME,
api_key: process.env.CLOUDINARY_API_KEY,
api_secret: process.env.CLOUDINARY_API_SECRET
})

const cloudinaryUploadImg = async (fileToUploads)=>{
    
}