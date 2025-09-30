const User = require("../models/User");
const jwt = require("jsonwebtoken");

//Generate token
const generateToken = (id) => {
    return jwt.ssign({ id}, process.env.JWT_SECRET, { expiresIn : "60d"});
};

// @desc Register new user
exports.register = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

//@desc Login user
exports.login = async (req, res) => {

};

//@ desc Get logged-in user
exports.getMe = async (req, res) => {
    res.json(req.user)
}