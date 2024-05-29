import React, { useState } from 'react';

function EmpCreate() {
  const [empData, setEmpData] = useState({ empname: '', empage: '', empphone: '' });
  const [mngData, setMngData] = useState({ mngname: '', mngempid: '', mngloc: '' });

  const handleEmpChange = (e) => {
    const { name, value } = e.target
    setEmpData({ ...empData, [name]: value });
  };

  const handleMngChange = (e) => {
    const { name, value } = e.target;
    setMngData({ ...mngData, [name]: value });
  };

  const handleEmpSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3000/empinfo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(empData),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log('Employee data inserted:', result);
    } catch (error) {
      console.error('Error inserting employee data:', error);
    }
  };

  const handleMngSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3000/mnginfo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(mngData),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log('Manager data inserted:', result);
    } catch (error) {
      console.error('Error inserting manager data:', error);
    }
  };

  return (
    <div>
      <h1>Insert the data</h1>
      <h2>Inserting values for Employee table</h2>
      <div>
        <label>Name</label>
        <input name="empname" onChange={handleEmpChange}></input>
      </div>
      <div>
        <label>Age</label>
        <input name="empage" onChange={handleEmpChange}></input>
      </div>
      <div>
        <label>Phone no</label>
        <input name="empphone" onChange={handleEmpChange}></input>
      </div>
      <button onClick={handleEmpSubmit}>Submit</button>
      <br></br>
      <div>
        <h2>Inserting values for Manager table</h2>
       
        <div>
          <label>Name</label>
          <input name="mngname" onChange={handleMngChange}></input>
        </div>
        <div>
          <label>EmpId</label>
          <input name="mngempid" onChange={handleMngChange}></input>
        </div>
        <div>
          <label>Location</label>
          <input name="mngloc" onChange={handleMngChange}></input>
        </div>
        <button onClick={handleMngSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default EmpCreate;
