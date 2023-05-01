import React, { useState } from "react";
import { employeesData } from "../page/data";
import Swal from "sweetalert2";
import Header from "./Header";
import Add from "./Add";
import Edit from "./Edit";
import List from "./List";

const Dashboard = () => {
  const [employees, setEmployees] = useState(employeesData);
  const [selectedEmployees, setSelectedEmployees] = useState(employeesData);
  const [adding, setAdding] = useState(false);
  const [editing, setEditing] = useState(false);

  const handleDelete = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "You can't change this",
      showCancelButton: true,
      confirmButtonText: "yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.value) {
        const [employee] = employees.filter((employee) => employee.id == id);

        Swal.fire({
          icon: "success",
          title: "Deleted",
          text: `${employee.firstName} ${employee.lastName}'s data has been deleted`,
          showConfirmButton: false,
          timer: 1500,
        });
        setEmployees(employees.filter((employee) => employee.id !== id));
      }
    });
  };
  const handleEdit = (id) => {
    const [employee] = employees.filter((employee) => employee.id === id);
    setSelectedEmployees(employee);
    setEditing(true);
  };

  return (
    <div className="container">
      {!adding && !editing && (
        <>
          <Header setAdding={setAdding} />
          <List
            employees={employees}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}

      {adding && (
        <Add
          employees={employees}
          selectedEmployees={selectedEmployees}
          setEmployees={setEmployees}
          setEditing={setEditing}
        />
      )}

      {editing && (
        <Add
          employees={employees}
          selectedEmployees={selectedEmployees}
          setEmployees={setEmployees}
          setEditing={setEditing}
        />
      )}
    </div>
  );
};

export default Dashboard;
