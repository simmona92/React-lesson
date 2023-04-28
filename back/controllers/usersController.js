const User = require("../models/usersModel");
const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(10);

exports.createNewUser = async (req, res) => {
    const {username, password} = req.body;
    try {
        await User.create({
                username,
                password: bcrypt.hashSync(password, salt)
            }
        );
    } catch (err) {
        res.status(500).json({
            status: "fail",
            message: err.message,
        });
    }
};