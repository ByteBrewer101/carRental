const express = require("express")
const { authRouter } = require("./Routers/authRouter")
const { dataRouter } = require("./Routers/dataRouter")


const ApiRouter = express.Router()


ApiRouter.use('/auth',authRouter)
ApiRouter.use('/data',dataRouter)



module.exports={
    ApiRouter
}