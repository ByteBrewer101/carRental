const { userModel } = require("../../models/userModel");
const {
  checkUserExistance,
  createUser,
  createJwt,
  checkPassword,
  hashPassword,
} = require("./helperFunctions");

async function SignUp(req, res) {
  try {
    const userDetails = req.body;
    const existance = await checkUserExistance(userDetails);
    if (existance) {
      return res.json({
        msg: "this user already exists",
      });
    } else {
      const currUser = await createUser(userDetails);
      const token = createJwt(currUser);

      if (token) {
        return res.status(200).json({
          msg: "user created successfully",
          username: currUser.username,
          role: currUser.type_of_user,
          token: `Bearer ${token}`,
        });
      } else {
        return res.json({
          msg: "error creating user invalid token",
        });
      }
    }
  } catch (e) {
    return res.status(500).json({
      msg: "Some error occured",
      error: e.message || "No error message",
    });
  }
}

async function Singin(req, res) {
  //userdetails from req body
  // user existance check
  // compare password if user exists
  //if all clear return jwt
  //else return error
  try {
    const userDetails = req.body;
    const existance = await checkUserExistance(userDetails);
    if (existance) {
      const pwd = userDetails.password;
      const currUser = await userModel.findOne({
        // username: userDetails.username,
        email: userDetails.email,
      });
      const hash_pwd = currUser.password;
      const check = await checkPassword(pwd, hash_pwd);

      if (check) {
        const token = createJwt(currUser);
        if (token) {
          return res.status(200).json({
            msg: "Signin successful",
            username: currUser.username,
            role: currUser.type_of_user,
            token: `Bearer ${token}`,
          });
        } else {
          return res.json({
            msg: "Error creating token",
          });
        }
      } else {
        return res.json({
          msg: "Incorrect password",
        });
      }
    } else {
      return res.json({
        msg: "User does not exist",
      });
    }
  } catch (e) {
    res.status(500).json({
      msg: "Some error occured",
      error: e.message || "No error message",
    });
  }
}

module.exports = {
  SignUp,
  Singin
};
