const User = require("../models/usersModel");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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

exports.loginUser = async (req, res) => {
    const {username, password} = req.body;
    const userLog = await User.findOne({username});
    const passOk = bcrypt.compareSync(password, userLog.password);
    if(passOk){
        jwt.sign({username, id:userLog._id}, process.env.JWT_SECRET, {}, (err, token) => {
            if (err) throw err;
            res.cookie('token', token).json('ok');
         })
    } else {
        res.status(400).json('wrong credentials');
    }
};

exports.logoutUser = async (req, res) => {
    res.cookie('token', '').json('ok');
}