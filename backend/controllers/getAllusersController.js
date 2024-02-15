const asyncHandler = require("express-async-handler");
const UserModel = require("../models/UserModel");

// /api/user?search=tulasiram
const getAllusersController = asyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { username: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};
  try {
    const users = await UserModel.find(keyword)
      .find({
        _id: { $ne: req.user._id },
      })
      .select("-token");
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

module.exports = getAllusersController;
