const express = require('express');
const Employee = require('./modal');
const controller = require('./controller')

const routes = express.Router();

routes.get('/employees', controller.getEmployee)
routes.put('/employees/:id', controller.updateEmployees);
routes.post('/employees', controller.addEmployee)
routes.delete('/employees/:id', controller.deleteEmployee);


module.exports = routes;