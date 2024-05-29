import React, { useState } from "react";

function EmpUpdate() {
  const [empData, setEmpData] = useState({empid: "", empname: "", empage: "", empphone: ""});
  const [mngData, setMngData] = useState({mngid: "", mngname: "", mngempid: "", mngloc: ""});

  const handleEmpChange = (e) => {
    const { name, value } = e.target;
    setEmpData({ ...empData, [name]: value });
  };

  const handleMngChange = (e) => {
    const { name, value } = e.target;
    setMngData({ ...mngData, [name]: value });
  };

  const handleEmpSubmit = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/empinfo/${empData.empid}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(empData),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Employee data updated:", result);
      setEmpData({empid: "", empname: "", empage: "", empphone: ""});
    } catch (error) {
      console.error("Error updating employee data:", error);
    }
  };

  const handleMngSubmit = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/mnginfo/${mngData.mngid}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(mngData),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Manager data updated:", result);
      setMngData({mngid: "", mngname: "", mngempid: "", mngloc: ""});
    } catch (error) {
      console.error("Error updating manager data:", error);
    }
  };

  return (
    <div>
      <h1>Update the data</h1>
      <h2>Employee table Update</h2>
      <div>
        <label>ID</label>
        <input name="empid" value={empData.empid} onChange={handleEmpChange}></input>
      </div>
      <div>
        <label>Name</label>
        <input name="empname" value={empData.empname} onChange={handleEmpChange}></input>
      </div>
      <div>
        <label>Age</label>
        <input name="empage" value={empData.empage} onChange={handleEmpChange}></input>
      </div>
      <div>
        <label>Phone no</label>
        <input name="empphone" value={empData.empphone} onChange={handleEmpChange}></input>
      </div>
      <button onClick={handleEmpSubmit}>Update</button>
      <br></br>
      <div>
        <h2>Manager table Update</h2>
        <div>
          <label>ID</label>
          <input name="mngid" value={mngData.mngid} onChange={handleMngChange}></input>
        </div>
        <div>
          <label>Name</label>
          <input name="mngname" value={mngData.mngname} onChange={handleMngChange}></input>
        </div>
        <div>
          <label>EmpId</label>
          <input name="mngempid" value={mngData.mngempid} onChange={handleMngChange}></input>
        </div>
        <div>
          <label>Location</label>
          <input name="mngloc" value={mngData.mngloc} onChange={handleMngChange}></input>
        </div>
        <button onClick={handleMngSubmit}>Update</button>
      </div>
    </div>
  );
}

export default EmpUpdate;
