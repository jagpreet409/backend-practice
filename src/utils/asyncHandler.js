const asyncHandler = (requestHandler) => {
    (req, res, next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=> next(err))   //next acts as a middleware
    }
}

export {asyncHandler}


//2nd way if we don't have promise

// const asyncHandler  =  (fn) => async (req, res, next) => {
//     try {

//         await fn(req, res, next)  //wrapper to be used
        
//     } catch (error) {
//         res.status(error.code || 500).json({
//             sucess: false,
//             message: error.message
//         })
        
//     }

// }   //passing function