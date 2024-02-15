const express = require("express");
const verifyJwt = require("../middleware/verifyJwt");
const {
  accessChat,
  fetchChats,
  createGroupChat,
  renameGroup,
  addToGroup,
  removeFromGroup,
} = require("../controllers/chatController");

const router = express.Router();

router.post("/", verifyJwt, accessChat);

router.get("/", verifyJwt, fetchChats);

router.post("/group", verifyJwt, createGroupChat);

router.put("/rename", verifyJwt, renameGroup);

router.put("/groupadd", verifyJwt, addToGroup);

router.put("/removeGroup", verifyJwt, removeFromGroup);

module.exports = router;
