const express = require("express")
const { SignUp, Singin } = require("../../controllers/authControllers/authControllers")

const authRouter = express.Router()

authRouter.post('/signup',SignUp)
authRouter.post('/signin', Singin)



module.exports={
    authRouter
}