function authMiddleware(req, res, next) {
  try{

    // get token from req object 
    // if no token received return error 
    // else verify token 
    // if not verified return error 
    
    //else set current user --batata hu




    
  }catch(e){
    return res.status(500).json({
        msg : "error occured in jwt verification",
        error : e.message || "no message here"
    })
  }


  
}


module.exports = {
    authMiddleware
}