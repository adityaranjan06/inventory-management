const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const serverConfig = require('./src/config/serverConfig');
const apiRoutes = require('./src/routes');
const User = require('./src/models/userModel');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoutes);

const setupAdmin = async () => {
    try {
        const admin = await User.findOne({ role: 'admin' });
        if (!admin) {
            await User.create({
                username: 'admin',
                password: 'adminpassword',
                role: 'admin'
            });
            console.log('Admin user created');
        }
    } catch (error) {
        console.error('Error setting up admin user:', error);
    }
};

app.listen(serverConfig.PORT, async () => {
    console.log(`Server started on port ${serverConfig.PORT}`);
    try {
        await mongoose.connect(serverConfig.MONGODB_URI);
        console.log('Successfully connected to the database');
        await setupAdmin();
    } catch (error) {
        console.error('Failed to connect to the database', error);
    }
});