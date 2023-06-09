// not found

const notfound = (req,res,next)=>{
    console.log(req.originalUrl);
    const error = new Error(`Not Found : ${req.originalUrl}`)
    res.status(404)
    next(error)
}

// Error Handler

const errorHandler = (err,req,res,next)=>{
    const statuscode = res.statusCode ==200 ? 500 :res.statusCode
    res.json({
        message:err?.message,
        stack:err?.stack
    })
}

module.exports={notfound,errorHandler}