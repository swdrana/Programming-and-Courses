const express = require('express');
const { getAllUsers, getRandomUser, saveNewUser, updateUser, bulkUpdate, deleteUser } = require('../controllers/user.controllers');
const userRoute = express.Router()

userRoute.use(express.json()); // Include JSON parsing middleware

userRoute.get('/all',getAllUsers)
userRoute.get('/random',getRandomUser)
userRoute.post('/save',saveNewUser)
userRoute.patch('/update/:id',updateUser)
userRoute.patch('/bulk-update',bulkUpdate)
userRoute.delete('/delete',deleteUser)

module.exports = {userRoute}
