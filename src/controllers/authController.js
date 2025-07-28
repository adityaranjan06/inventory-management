const authService = require('../services/authService');

const register = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await authService.registerUser({ username, password });
        res.status(201).json({ message: 'User registered successfully', userId: user._id });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const token = await authService.loginUser({ username, password });
        res.status(200).json({ message: 'Login successful', access_token: token });
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};

module.exports = {
    register,
    login
};