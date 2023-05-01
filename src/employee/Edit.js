import React, { useState } from "react";
import Swal from "sweetalert2";

function Edit({ employees, selectedEmployees, setEmployees, setEditing }) {
  const id = selectedEmployees.id;

  const [firstName, setFirstName] = useState(selectedEmployees.firstName);
  const [lastName, setLastName] = useState(selectedEmployees.lastName);
  const [email, setEmail] = useState(selectedEmployees.email);
  const [date, setDate] = useState(selectedEmployees.date);

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !date) {
      return Swal.fire({
        icon: "error",
        title: "Error",
        text: "All inputs are required",
        showConfirmButton: true,
      });
    }

    const employee = { id, firstName, lastName, email, date };

    for (let i = 0; i < employees.length; i++) {
      if (employees[i].id === id) {
        employees.splice(i, 1, employee);
        break;
      }
    }

    setEmployees(employees);
    setEditing(false);

    Swal.fire({
      icon: "success",
      title: "Updated",
      text: `${employee.firstName} ${employees.lastName}'s data has been updates`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit Employee</h1>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <div>
          <input type="submit" value="Update" />
          <input
            type="button"
            value="Cancel"
            onClick={() => setEditing(false)}
          />
        </div>
      </form>
    </div>
  );
}

export default Edit;
