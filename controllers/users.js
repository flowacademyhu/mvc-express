const express = require('express');
const users = express();
const userModel = require('../models/user');

// index
users.get('/', (req, res) => {
  let allUsers = userModel.getAll();
  res.json(allUsers);
});

// show
users.get('/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let user = userModel.get(id);
  res.json(user);
});

// new
users.get('/new', (req, res) => {
  res.json({action: 'new'});
});

// create
users.post('/create', (req, res) => { 
  let user = userModel.create({username: req.query.username});
  res.json(user);
});

// edit
users.get('/:id/edit', (req, res) => {
  let id = req.params.id;
  res.json({id: id, action: 'edit'});
});

// update
users.put('/:id/update', (req, res) => {
  let id = req.params.id;
  res.json({id: id, action: 'update'});
});

// destroy
users.delete('/:id/delete', (req, res) => {
  let id = parseInt(req.params.id);
  let user = userModel.destroy(id);
  res.json(user);
});

module.exports = users;
