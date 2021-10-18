const TokenUtil = require("../Utils/Token");

const checkToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    console.log(token);

    let fixtoken;
    if (token.indexOf(" ") >= 0) fixtoken = token.split(" ");

    if (!fixtoken[2]) {
      res.sendStatus(403);
    }
    const verifyToken = await TokenUtil.verifyToken(fixtoken[2]);

    if (!verifyToken) {
      res.send(false);
    } else {
      delete verifyToken.Password;
      req = verifyToken;

      delete req.user.Password;
    }

    return next();
  } catch (error) {
    res.send(false);
  }
};

module.exports = checkToken;
