const { userModel } = require("../../models/userModel")

async function SignUp(req,res){

    try{

        // user input 
        //validate 
        //password hash 
        //db check if user exists 
        //create user 
        // create jwt 
        // respond with jwt 

        const userDetails = req.body

        const currUser = await userModel.findOne({
            username : userDetails.username,
            email : userDetails.email
        })

        if(currUser){
            return res.json({
                msg :"user already exists"
            })
        }else{
            const currCreatedUser = await userModel.create(userDetails)
            if(currCreatedUser){
                return res.status(200).json({
                    msg : "user created successfully"
                })
            }
        }






    }catch(e){
        return res.status(500).json({

            msg : "There is some error",
            error : e.message || "Sample error message"

        })
    }




}



module.exports={
    SignUp
}