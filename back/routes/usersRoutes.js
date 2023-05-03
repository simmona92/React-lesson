const express = require("express");
const router = express.Router();

const { createNewUser, loginUser } = require("../controllers/usersController");

router.route("/register").post(createNewUser);
router.route("/login").post(loginUser);

module.exports = router;