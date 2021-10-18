const jwt = require("jsonwebtoken");
const jwtConfig = require("../Configs/token.js");

const generateToken = async (user) => {
  delete user.Password;

  return await jwt.sign(
    {
      user,

      //mask userdata
    },
    jwtConfig.secretKey,

    {
      subject: user._id.toString(),
      expiresIn: "365d",
    }
  );
};

const verifyToken = async (token) => {
  console.log(jwtConfig.secreKey);
  return await jwt.verify(token, jwtConfig.secretKey);
};

module.exports = {
  generateToken,
  verifyToken,
};
