const express = require("express")
const { SignUp } = require("../../controllers/authControllers/authControllers")

const authRouter = express.Router()

authRouter.post('/signup',SignUp)



module.exports={
    authRouter
}