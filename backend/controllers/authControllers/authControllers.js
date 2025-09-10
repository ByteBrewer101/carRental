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

      return res.status(200).json({
        msg: "user created successfully",
        token: `Bearer ${token}`,
      });
    }
  } catch (e) {
    return res.status(500).json({
      msg: "Some error occured",
      error: e.message || "No error message",
    });
  }
}

module.exports = {
  SignUp,
};
