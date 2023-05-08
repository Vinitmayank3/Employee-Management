
const Employee = require('./modal');


const addEmployee = async (req, res) => {
  const newEmployee = new Employee(req.body);

  try {
    await newEmployee.save();
    res.send(newEmployee);
    console.log(newEmployee);
  } catch (e) {
    res.status(500).send(e);
  }
}

// get Employee---->

const getEmployee = async (req, res) => {
  const getEmployees = await Employee.find({});

  try {
    res.send(getEmployees)
  } catch (error) {
    res.status(500).send(error);
  }
}

// update Employee ---->

const updateEmployees = async (req, res) => {
  // const id = req.body._id

  try {
    const updatedEmp = await Employee.findByIdAndUpdate(req.params.id, req.body);
    await updatedEmp.save();

    res.send(updatedEmp)
  } catch (error) {
    res.status(500).send(error);

  }
}

// delete Employee ---->

const deleteEmployee = async (req, res) => {
  try {
    const deletedEmp = await Employee.findByIdAndDelete(req.params.id);
    if (!deletedEmp) res.status(404).send("No Employee found");
    res.status(200).send();
  } catch (error) {
    res.status(500).send(error);
  }
}










module.exports = {
  addEmployee, getEmployee, updateEmployees, deleteEmployee
}