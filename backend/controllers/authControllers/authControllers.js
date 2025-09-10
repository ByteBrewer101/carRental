const { userModel } = require("../../models/userModel");
const {
  checkUserExistance,
  createUser,
  createJwt,
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


async function Singin(req,res){

    //userdetails from req body 
    // user existance check 
    // compare password if user exists 
    //if all clear return jwt 
    //else return error 



}



module.exports = {
  SignUp,
};
