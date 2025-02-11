const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
    firstName: {
        type: String,
        required: [true, 'First name is required'],
        trim: true,
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    otp: {
        type: String,
        // required: true,
    },
    isVerified: {
        type: Boolean,
        default: false,
    }
   },
   {timestamps: true, versionKey: false}
);

const User = mongoose.model("User", userSchema);
 
module.exports = User;