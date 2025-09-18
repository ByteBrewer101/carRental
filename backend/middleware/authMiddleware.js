const { verifyJwt } = require("./helpers");

function authMiddleware(req, res, next) {
  try {
    // get token from req object
    // if no token received return error
    // else verify token
    // if not verified return error

    //else set current user --batata hu
    const { authorization: token } = req.headers;
    if (!token) {
      return res.status(500).json({
        msg: "Token not recieved",
      });
    } else {
      const result = verifyJwt(token);
      if (!result.status) {
        return res.json({
          msg: result.msg,
        });
      } else {
        const userDetails = result.currUser
        req.user = userDetails
        next();
      }
    }
  } catch (e) {
    return res.status(500).json({
      msg: "error occured in jwt verification",
      error: e.message || "no message here",
    });
  }
}

module.exports = {
  authMiddleware,
};
