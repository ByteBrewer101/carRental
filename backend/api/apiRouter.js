const express = require("express")
const { authRouter } = require("./Routers/authRouter")


const ApiRouter = express.Router()


ApiRouter.use('/auth',authRouter)



module.exports={
    ApiRouter
}