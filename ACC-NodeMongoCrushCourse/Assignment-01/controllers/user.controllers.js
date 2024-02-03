const fs = require('fs');
const { dirname } = require('path');
module.exports.getAllUsers = (req, res, next) =>{
    res.send(fs.readFileSync('./data/userData.json'))
}