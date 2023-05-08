const express = require('express');
const Employee = require('./modal');

const routes = express.Router();

routes.get('/', (req, res) => [
  res.send("Yeah It's Working!!")
])
routes.put('/', (req, res) => [
  res.send("Yeah It's Working!!")
])
routes.post('/', (req, res) => [
  
])
routes.delete('/', (req, res) => [
  res.send("Yeah It's Working!!")
])


module.exports = routes;