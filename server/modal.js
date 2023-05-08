const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String
  },
  role: {
    required: true,
    type: String
  },
  img: {
    required: true,
    type: String
  }
})

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;