import React from "react";

const Header = ({ setAdding }) => {
  return (
    <header>
      <h1>Employee Management</h1>
      <div style={{ marginTop: "30px", marginBottom: "18px" }}>
        <button className="round-button" onClick={() => setAdding(true)}>
          Add Button
        </button>
      </div>
    </header>
  );
};

export default Header;
