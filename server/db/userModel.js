const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    email:{
        type: String,
        required: [true, "Please Provide an Email!"],
        unique: [true, "Email Exists"],
    },

    password:{
        type: String,
        required: [true, "Please provide password!"],
        unique: false,
    },
});

module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);