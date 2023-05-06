const express = require('express')
const bodyParser= require('body-parser')
const dbConnect = require('./config/dbConnection')
const app = express()
const dotenv = require('dotenv').config()
const authRouter =require('./routes/authRoute')
const { notfound, errorHandler } = require('./middlewares/errorHandler')
const PORT = process.env.PORT || 4000

// database connection function
dbConnect()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))

app.use("/api/user",authRouter)

app.use(notfound)
app.use(errorHandler)

app.listen(PORT,()=>{
    console.log(`Server is running at PORT ${PORT}`);
})
