const express = require('express');
const { getAllUsers, getRandomUser } = require('../controllers/user.controllers');
const userRoute = express.Router()
userRoute.get('/all',getAllUsers)
userRoute.get('/random',getRandomUser)

module.exports = {userRoute}
