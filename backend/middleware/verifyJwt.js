const asyncHandler = require("express-async-handler");

const User = require("../models/UserModel");

const jwt = require("jsonwebtoken");

const verifyJwt = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECERT);

      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      res.status(401).json({ error: "Not auturized token failed" });
      console.log(error);
    }
  } else {
    res.status(401).json({ error: "Not authorized no token" });
  }
});

module.exports = verifyJwt;
