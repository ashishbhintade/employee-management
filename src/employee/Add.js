import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";

function Add({ employees, setEmployees, setAdding }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");

  const textInput = useRef(null);

  useEffect(() => {
    textInput.current.focus();
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !date) {
      return Swal.fire({
        icon: "error",
        title: "Error",
        text: "All inputs are required",
        showConfirmationButton: true,
      });
    }

    const id = employees.length + 1;
    const newEmployee = {
      id,
      firstName,
      lastName,
      email,
      date,
    };
    employees.push(newEmployee);
    setEmployees(employees);
    setAdding(false);

    Swal.fire({
      icon: "success",
      title: "Addded",
      text: `${firstName} ${lastName}'s data has been added`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add Employee</h1>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          ref={textInput}
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

        <label htmlFor="lastName">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="lastName">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <div>
          <input type="submit" value="Add" />
          <input
            type="button"
            value="Cancel"
            onClick={() => setAdding(false)}
          />
        </div>
      </form>
    </div>
  );
}

export default Add;
