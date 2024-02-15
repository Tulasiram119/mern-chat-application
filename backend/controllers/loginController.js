const generateToken = require("../config/generateToken");
const User = require("../models/UserModel");
const asyncHandler = require("express-async-handler");
const loginController = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      email: user.email,
      pic: user.pic,
      username: user.username,
      token: generateToken(user._id),
    });
  } else {
    res.status(401).json({ message: "email or password are invalid" });
  }
});

module.exports = loginController;
