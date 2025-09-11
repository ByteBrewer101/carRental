const bcrypt = require("bcrypt");
const { default: mongoose } = require("mongoose");
const { userModel } = require("../../models/userModel");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../../config/constants");

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

async function createUser(userDetails) {
  const hashedPassword = await hashPassword(userDetails.password);
  const newUser = {
    ...userDetails,
    password: hashedPassword,
  };

  const createdUser = await userModel.create(newUser);
  return createdUser;
}

function createJwt(userDetails) {
  const modifiedUserDetails = {
    username: userDetails.username,
    email: userDetails.email,
    role : userDetails.type_of_user,
    userId: userDetails._id,
  };

  const token = jwt.sign(modifiedUserDetails, JWT_SECRET);

  return token;
}

module.exports = {
  createJwt,
  createUser,
  checkUserExistance,
  checkPassword,
  hashPassword,
};
