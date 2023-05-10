const express = require('express')
const bodyParser= require('body-parser')
const dbConnect = require('./config/dbConnection')
const app = express()
const dotenv = require('dotenv').config()
const authRouter =require('./routes/authRoute')
const productRouter = require('./routes/productRoute')
const blogRouter = require('./routes/blogRouter')
const { notfound, errorHandler } = require('./middlewares/errorHandler')
const PORT = process.env.PORT || 4000
const cookieParser = require('cookie-parser')
const morgan =require('morgan')

// database connection function
dbConnect()

app.use(morgan('dev '))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))
app.use(cookieParser())

app.use("/api/user",authRouter)
app.use("/api/product",productRouter)
app.use("/api/blog",blogRouter)

app.use(notfound)
app.use(errorHandler)

app.listen(PORT,()=>{
    console.log(`Server is running at PORT ${PORT}`);
})
