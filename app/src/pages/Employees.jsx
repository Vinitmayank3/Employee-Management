import React, { useState } from "react";
import EmployeeCard from "../components/EmployeeCard";
import AddModal from "../components/AddModal";
import { v4 as uuidv4 } from "uuid";

function Employees() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Vineet Mayank",
      role: "Developer",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      name: "Test Mayank",
      role: "Test Role",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      name: "Test Mayank 3",
      role: "Test Role 3",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      name: "Test Mayank 4",
      role: "Test Role 4",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ]);

  const handleDelete = (id) => {
    const deletedEmployee = employees.filter((em) => {
      return em.id !== id;
    });
    setEmployees(deletedEmployee);
  };

  const handleEdit = (id, newName, newRole) => {
    const editedEmployee = employees.map((em) => {
      if (em.id === id) {
        return { ...em, name: newName, role: newRole };
      }
      return em;
    });
    setEmployees(editedEmployee);
  };
  const handleAdd = (name, role, img) => {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    };
    setEmployees([...employees, newEmployee]);
  };
  return (
    <>
      <div className="flex flex-wrap justify-between">
        {employees.map((em) => {
          return (
            <EmployeeCard
              key={em.id}
              id={em.id}
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
