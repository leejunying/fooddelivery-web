const jwt = require("jsonwebtoken");
const jwtConfig = require("../Configs/token.js")

const generateToken = async (user) => {

  console.log(user)

  return await jwt.sign(
    { 
      _id: user._id,
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

   console.log(jwtConfig.secreKey)
  return await jwt.verify(token, jwtConfig.secretKey);
};

module.exports = {
  generateToken,
  verifyToken,
};
