const asynchandaller=(requestHandler)=>{
    (req,res,next)=>{
        promise.resolve(requesHandler(req,res,next)).catch((err)=> next(err))
    }

}

export default asynchandaller;


