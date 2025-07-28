const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const serverConfig = require('../config/serverConfig');

const registerUser = async (userData) => {
    const existingUser = await User.findOne({ username: userData.username });
    if (existingUser) {
        throw new Error('User with this username already exists');
    }
    const user = await User.create(userData);
    return user;
};

const loginUser = async (loginData) => {
    const user = await User.findOne({ username: loginData.username });
    if (!user) {
        throw new Error('Invalid username or password');
    }

    const isMatch = await bcrypt.compare(loginData.password, user.password);
    if (!isMatch) {
        throw new Error('Invalid username or password');
    }

    const token = jwt.sign({ id: user._id, role: user.role }, serverConfig.JWT_SECRET, {
        expiresIn: '1d',
    });

    return token;
};

module.exports = {
    registerUser,
    loginUser
};