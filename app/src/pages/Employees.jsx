import React, { useEffect, useState } from "react";
import EmployeeCard from "../components/EmployeeCard";
import AddModal from "../components/AddModal";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

function Employees() {
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    axios.get(baseURL).then((res) => {
      setEmployees(res.data);
    });
  };

  const handleDelete = async (id) => {
    await axios.delete(baseURL + `/${id}`).then(() => {
      console.log("Successfully deleted...");
      const em = getEmployees();
      setEmployees(em);
    });

  };

  const handleEdit = (id, newName, newRole) => {
    axios
      .put(baseURL + `/${id}`, {
        name: newName,
        role: newRole,
      })
      .then(() => {
        console.log("updated");
        const edit = getEmployees();
        setEmployees(edit);
      });
  };
  const handleAdd = (name, role, img) => {
    axios
      .post(baseURL, {
        name: name,
        role: role,
        img: img,
      })
      .then(() => {
        const add = getEmployees();
        setEmployees(add);
      });
  };
  const baseURL = "http://localhost:8080/employees";
  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <>
      <div className="flex flex-wrap justify-between">
        {employees &&
          employees.map((em) => {
            return (
              <EmployeeCard
                key={uuidv4()}
                id={em._id}
                name={em.name}
                role={em.role}
                img={em.img}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            );
          })}
      </div>
      <AddModal handleAdd={handleAdd} />
    </>
  );
}

export default Employees;
