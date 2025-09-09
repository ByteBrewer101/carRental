const { default: mongoose } = require("mongoose");

const userTypes = ["user", "seller", "admin"];

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  type_of_user: {
    //enum
    type: String,
    enum: userTypes,
    required: true,
    default:"user"
  },
  dl_number: {
    type: String,
    required: false,
  },
  date_range: {
    type: String,
    required: false,
  },
  seller_rating: {
    type: Number,
    required: false,
  },
});

const userModel = mongoose.model("userModel", userSchema);

module.exports = {
  userModel,
};
