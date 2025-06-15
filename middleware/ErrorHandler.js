const ErrorHandler = (err,req,res,next) =>{
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "fail";
    return res.status(err.statusCode).json({message:err.message,status:`${err.statusCode} - ${err.status} due to ${err.message} !`});
};

module.exports = ErrorHandler;

