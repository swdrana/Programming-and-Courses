const express = require('express');
const { getAllUsers } = require('../controllers/user.controllers');
const userRoute = express.Router()
userRoute.get('/',getAllUsers)

module.exports = {userRoute}
