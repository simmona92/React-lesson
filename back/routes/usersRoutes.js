const express = require("express");
const router = express.Router();

const { createNewUser } = require("../controllers/usersController");

router.route("/").post(createNewUser);

module.exports = router;