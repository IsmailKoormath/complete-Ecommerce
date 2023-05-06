// not found

const notfound = (req,res,next)=>{
    const error = new Error(`Not Found : ${req.originalUrl}`)
    console.log(req.originalUrl);
    res.status(404)
    next(error)
}

// Error Handler

const errorHandler = (err,req,res,next)=>{
    const statuscode = res.statusCode ==200 ? 500 :res.statusCode
    console.log(res.statusCode);
    res.json({
        message:err?.message,
        stack:err?.stack
    })
}

module.exports={notfound,errorHandler}