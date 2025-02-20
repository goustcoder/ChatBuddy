const mongoose = require('mongoose');
require('dotenv').config(); // Make sure to load .env variables
const url = process.env.MONGODB_URL;

const connectDB = async () => {
    try {
        await mongoose.connect(url);
        console.log('✅ MongoDB connected successfully!');
    } catch (err) {
        console.error("❌ Error connecting to the database:", err.message);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
