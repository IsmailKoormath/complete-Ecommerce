const mongoose = require('mongoose')

const dbConnect = ()=>{
    try {
        const dbConnection = mongoose.connect(process.env.MONGODB_URL)
        console.log("Database Connected Successfully");
    } catch (error) {
        console.log("Database error");
    }
}
module.exports =dbConnect