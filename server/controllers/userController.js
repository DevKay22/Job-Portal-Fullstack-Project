const fs = require('fs');
const path = require('path');
const User = require("../models/User");

//@desc  Update user profile (name, avatar, company details)
exports.updateProfile = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({message : error.message});
    }
};

// @desc  Delete