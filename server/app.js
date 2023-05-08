const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');

// DB Connection--->
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/employeeDataBase');
  console.log("DB is Connected🎆🎇");
}

//DB Connection End Here----||



const app = express();
app.use(express.json());
app.use(cors());



app.use(routes);


app.listen(8080, () => {
  console.log("Server is Started 🚀🚀🚀")
});