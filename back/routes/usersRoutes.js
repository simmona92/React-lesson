const express = require("express");
const router = express.Router();

const { createNewUser, loginUser } = require("../controllers/usersController");

router.route("/").post(createNewUser);
router.route("/").post(loginUser);

module.exports = router;