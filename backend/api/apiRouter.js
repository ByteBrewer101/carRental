const express = require("express")
const { authRouter } = require("./Routers/authRouter")
const { dataRouter } = require("./Routers/dataRouter")
const { authMiddleware } = require("../middleware/authMiddleware")


const ApiRouter = express.Router()


ApiRouter.use('/auth',authRouter)
ApiRouter.use('/data',authMiddleware,dataRouter)



module.exports={
    ApiRouter
}



