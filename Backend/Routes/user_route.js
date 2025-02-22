const express = require('express');
const checkuser = require('../middlewares/checkuser');
const userRegister = require('../controller/userRegister');
const userRoute = express.Router();

userRoute.post('/user',checkuser,userRegister);

module.exports = userRoute;
