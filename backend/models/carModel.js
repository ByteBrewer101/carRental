const { default: mongoose } = require("mongoose");
const { userModel } = require("./userModel");

const statusTypes = ["Rented", "Free"];
const carSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    photo:{
        type: String,
        required: true
    },
    status:{
        type: String,
        enum: statusTypes,
        default:"Free"
    },
    rent_price:{
        type: Number,
        required: true
    },
    seller_id:{
        type: mongoose.ObjectId,
        ref: userModel
    },
    location:{
        type: String,
        required: true
    },
    number_plate:{
        type: String,
        required: true
    },
    rented_user_id:{
        type: mongoose.ObjectId,
        ref: userModel
    },
    rating:{
        type: Number
    }
    

});

const carModel = mongoose.model("carModel", carSchema);

module.exports = {
    carModel
};