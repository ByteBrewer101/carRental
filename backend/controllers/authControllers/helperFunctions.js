const bcrypt = require("bcrypt");
const { default: mongoose } = require("mongoose");
const { userModel } = require("../../models/userModel");

async function hashPassword(pass) {
  const saltRounds = 10;
  const pass_hashed = await bcrypt.hash(pass, saltRounds);
  return pass_hashed;
}

async function checkPassword(user_pass, hashed_pass) {
  const status = await bcrypt.compare(user_pass, hashed_pass);
  return status;
}

async function checkUserExistance(userDetails) {
  const currUser = await userModel.findOne({
    username: userDetails.username,
    email: userDetails.email,
  });

  return currUser ? true : false;
}
