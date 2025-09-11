const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/constants");

function verifyJwt(token) {
  try {
    const currUser = jwt.verify(token, JWT_SECRET);
    return {
      status: true,
      currUser,
    };
  } catch (e) {
    return {
      status: false,
      msg: e.message || "JWT error",
    };
  }
}

module.exports = {
  verifyJwt,
};
