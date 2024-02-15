const express = require("express");
const verifyJwt = require("../middleware/verifyJwt");
const {
  sendMessage,
  allMessages,
} = require("../controllers/messageController");

const router = express.Router();

router.post("/", verifyJwt, sendMessage);

router.get("/:chatId", verifyJwt, allMessages);

module.exports = router;
