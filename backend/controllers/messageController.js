const asyncHandler = require("express-async-handler");
const Message = require("../models/MessageModel");
const UserModel = require("../models/UserModel");
const ChatModel = require("../models/ChatModel");
const MessageModel = require("../models/MessageModel");
const sendMessage = asyncHandler(async (req, res) => {
  const { content, chatId } = req.body;

  if (!content || !chatId) {
    console.log("invalid data passed into request");
    res.sendStatus(403);
    return;
  }
  var newMessage = {
    sender: req.user._id,
    content: content,
    chat: chatId,
  };
  try {
    var message = await Message.create(newMessage);
    message = await message.populate("sender", "username pic");
    message = await message.populate("chat");
    message = await UserModel.populate(message, {
      path: "chat.users",
      select: "username pic email",
    });
    await ChatModel.findByIdAndUpdate(
      { _id: req.body.chatId },
      {
        latestMessage: message,
      }
    );
    res.json(message);
  } catch (error) {
    res.status(400).json({ error: error.message || "internal server error" });
  }
});

const allMessages = asyncHandler(async (req, res) => {
  const id = req.params.chatId;

  try {
    const messages = await Message.find({ chat: id })
      .populate("sender", "username pic email")
      .populate("chat");

    res.json(messages);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = { sendMessage, allMessages };
