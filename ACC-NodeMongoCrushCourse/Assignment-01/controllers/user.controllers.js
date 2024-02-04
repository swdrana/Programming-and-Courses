const fs = require("fs");
// const path = require('path');
let users = [
    {
      id: 1,
      gender: 'male',
      name: 'John Doe',
      contact: '+1234567890',
      address: '123 Main Street, City, Country',
      photoUrl: 'https://example.com/photos/john_doe.jpg'
    },
    {
      id: 2,
      gender: 'female',
      name: 'Jane Smith',
      contact: '+1987654321',
      address: '456 Elm Street, Town, Country',
      photoUrl: 'https://example.com/photos/jane_smith.jpg'
    },
    {
      id: 3,
      gender: 'male',
      name: 'Michael Johnson',
      contact: '+1122334455',
      address: '789 Oak Street, Village, Country',
      photoUrl: 'https://example.com/photos/michael_johnson.jpg'
    },
    {
      id: 4,
      gender: 'female',
      name: 'Emily Brown',
      contact: '+1554433221',
      address: '987 Pine Street, Hamlet, Country',
      photoUrl: 'https://example.com/photos/emily_brown.jpg'
    },
    {
      id: 5,
      gender: 'male',
      name: 'Christopher Wilson',
      contact: '+1988776655',
      address: '654 Cedar Street, Village, Country',
      photoUrl: 'https://example.com/photos/christopher_wilson.jpg'
    }
  ]

const getAllUsers = (req, res, next) => {
  if (req.query.limit != undefined) {
    res.send(users.slice(0, req.query.limit));
  } else {
    res.send(users);
  }
};
console.log(users)
let previousRnd = 0;
const getRandomUser = (req, res, next) => {
  let rnd = Math.floor(Math.random() * users.length);
  if (previousRnd != rnd) {
    res.send(users[rnd]);
    // console.log(previousRnd, rnd);
    previousRnd = rnd;
  } else {
    getRandomUser(req, res, next);
  }
};

const saveNewUser = (req, res, next) => {
  const { id, gender, name, contact, address, photoUrl } = req.body;
  if (!gender || !name || !contact || !address || !photoUrl) {
    return res.status(400).json({
      error: "Missing required properties. Please provide id, name, and email.",
    });
  }
  let newID = users[users.length - 1].id + 1;
  const newData = { ...req.body, id: newID };
  users.push(newData);
  res.send({
    success: true,
    status: 200,
    data: users,
  });
};

const updateUser = (req, res, next) => {
  const { id } = req.params;
  const updates = req.body;
  const userIndex = users.findIndex((user) => user.id == id);

  if (userIndex !== -1) {
    const updatedUser = {
      ...users[userIndex],
      ...updates,
    };
    users[userIndex] = updatedUser;
    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: updatedUser,
    });
  } else {
    return res.status(404).json({
      error: "User not found",
    });
  }
};

const bulkUpdate = (req, res, next) => {
  const updateDatas = req.body;
  updateDatas.forEach((updateUser) => {
    const updateIndex = users.findIndex((u) => u.id == updateUser.id);
    if (updateIndex != -1) {
      users[updateIndex] = {
        ...users[updateIndex],
        ...updateUser,
      };
    } else {
      return res.status(404).json({
        error: "User not found",
      });
    }
  });
  res.status(200).json({
    success: true,
    message: "Bulk update completed",
    data: users,
  });
};

const deleteUser = (req, res, next) => {
  const id = req.body.id;
  console.log(id);
  const foundUserIndex = users.findIndex(user=>user.id==id)

  if (foundUserIndex!==-1) {
    const newUsers = users.filter((user) => user.id != id);
    users=newUsers;
    res.status(200).json({
      success: true,
      message: "Delete completed",
      data: users,
    });
  }else{
    res.status(404).json({
      success: false,
      message: "ID Already Deleted or, Missing ID in the body",
    });
  }
};
module.exports = {
  getAllUsers,
  getRandomUser,
  saveNewUser,
  updateUser,
  bulkUpdate,
  deleteUser,
};
