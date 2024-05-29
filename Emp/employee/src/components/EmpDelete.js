import React, { useState } from "react";

function EmpDelete() {
  const [empId, setEmpId] = useState("");
  const [mngId, setMngId] = useState("");

  const handleEmpDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3000/empinfo/${empId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log("Employee data deleted successfully");
      setEmpId("");
    } catch (error) {
      console.error("Error deleting employee data:", error);
    }
  };

  const handleMngDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3000/mnginfo/${mngId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log("Manager data deleted successfully");
      setMngId("");
    } catch (error) {
      console.error("Error deleting manager data:", error);
    }
  };

  return (
    <div>
      <h1>Delete the data</h1>
      <h2>Employee table value Delete</h2>
      <div>
        <label>ID</label>
        <input
          name="empid"
          value={empId}
          onChange={(e) => setEmpId(e.target.value)}
        ></input>
      </div>
      <button onClick={handleEmpDelete}>Delete</button>
      <br></br>
      <div>
        <h2>Manager table value Delete</h2>
        <div>
          <label>ID</label>
          <input
            name="mngid"
            value={mngId}
            onChange={(e) => setMngId(e.target.value)}
          ></input>
        </div>
        <button onClick={handleMngDelete}>Delete</button>
      </div>
    </div>
  );
}

export default EmpDelete;
