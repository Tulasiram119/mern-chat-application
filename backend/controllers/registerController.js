const asyncHandler = require("express-async-handler");
const User = require("../models/UserModel");
const generateToken = require("../config/generateToken");
const registerController = asyncHandler(async (req, res) => {
  const { username, email, password, pic } = req.body;

  if (!username || !email || !password) {
    res.status(400).json({ message: "required fields are missing" });
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(409).json({ message: "User with email already exists" });
  }

  const user = await User.create({
    username,
    email,
    password,
    pic,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      email: user.email,
      pic: user.pic,
      username: user.username,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json({ message: "Failed to create user" });
  }
});

module.exports = registerController;
