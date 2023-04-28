const mongoose = require("mongoose");
const { Schema, model } = mongoose;

let userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            minlength: 4,
            maxlength: 16
        },
        password: {
            type: String,
            required: true
        }
    }
);

const User = new model("User", userSchema);

module.exports = User;