const express = require('express');
const cors = require('cors');
const userRoute = require('./Routes/user_route');
const connectDB = require('./config/db.js');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to the database
connectDB();

// Route middlewares
app.use('/v1/api', userRoute);

// Start the server with error handling
app.listen(PORT, (err) => {
    if (err) {
        console.error(`Failed to start server: ${err.message}`);
        process.exit(1); // Exit the process with an error
    }
    console.log(`Server is running on port ${PORT}`);
});
