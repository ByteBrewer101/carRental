const express = require("express")
const { ordersModel } = require("../../models/ordersModel")

const dataRouter = express.Router()


//get all listings according to role 
//get all orders according to user and role 

//user 
//post an order for a listing 



//seller 
//create a listing 
//update a listing 
//delete a listing 



//admin


//seller 

dataRouter.post('/create_listing', async(req,res)=>{

    try{


        const currListing = req.body

        



    }catch(e){
        return res.json({
            msg : "error occured in create listing ",
            error : e.message || "no error msg"
        })
    }



})







dataRouter.get("/sampleget",(req,res)=>{
    return res.json({
        msg :"you hit sample get"
    })
})





module.exports = {
    dataRouter
}