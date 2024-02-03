const fs = require("fs");
const { dirname } = require("path");
let users = JSON.parse(fs.readFileSync("./data/userData.json"));

const getAllUsers = (req, res, next) => {
    
  if (req.query.limit != undefined) {
    res.send(users.slice(0,req.query.limit));
  } else {
    res.send(users);
  }
};

let previousRnd = 0;
const getRandomUser = (req, res, next) => {
  let rnd = Math.floor(Math.random() * users.length);
  if (previousRnd != rnd) {
    res.send(users[rnd]);
    console.log(previousRnd, rnd);
    previousRnd = rnd;
  } else {
    getRandomUser(req, res, next);
  }
};

module.exports = { getAllUsers, getRandomUser };
