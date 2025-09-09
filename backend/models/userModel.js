const { default: mongoose } = require("mongoose");

const userTypes = ["user", "seller", "admin"];

const userSchema = new mongoose.Schema({
  username: {
    type: "string",
    required: true,
    unique: true,
  },
  email: {
    type: "string",
    required: true,
    unique: true,
  },
  password: {
    type: "string",
    required: true,
  },
  type_of_user: {
    //enum
    type: "string",
    enum: userTypes,
    required: true,
  },
  dl_number: {
    type: "string",
    required: false,
  },
  date_range: {
    type: "string",
    required: false,
  },
  seller_rating: {
    type: "number",
    required: false,
  },
});

const userModel = mongoose.model("userModel", userSchema);

module.exports = {
  userModel,
};
