const express = require("express");
const loginController = require("../controllers/loginController");
const registerController = require("../controllers/registerController");
const getAllusersController = require("../controllers/getAllusersController");
const verifyJwt = require("../middleware/verifyJwt");
const router = express.Router();

router.post("/register", registerController);

router.post("/login", loginController);

router.get("/", verifyJwt, getAllusersController);

module.exports = router;
