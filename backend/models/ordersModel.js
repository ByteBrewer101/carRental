const { default: mongoose } = require("mongoose");
const { carModel } = require("./carModel");
const { userModel } = require("./userModel");

const ordersSchema = new mongoose.Schema({
    car_id:{
        type: mongoose.ObjectId,
        ref: carModel,
        required: true
    },
    user_id:{
        type: mongoose.ObjectId,
        ref: userModel,
        required: true
    },
    seller_id:{
        type: mongoose.ObjectId,
        ref: userModel,
        required: true
    },
    date_range:{
        type: Number,
        required: true
    },
    total_amount:{
        type: Number,
        required: true
    },
    otp:{
        type: Number,
        required: true
    }
})

const ordersModel = mongoose.Model("ordersModel", ordersSchema)

module.exports = {
    ordersModel
}