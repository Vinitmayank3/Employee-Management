
const Employee = require('./modal');


const addEmployee = async (req, res) => {
  try {
    if (req.body == '') {
      console.log('Employee Information is Empty')
    } else {
      const newEmployee = new Employee({
        name: req.body.name,
        role: req.body.role,
        img: req.body.img
      })

      const res = await newEmployee.save();

      console.log(res);



    }

  } catch (error) {
    console.log(error);
  }
}









module.exports = {
  addEmployee
}