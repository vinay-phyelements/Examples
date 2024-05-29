import React, { useEffect, useState } from "react";
import axios from "axios";

function EmpRead() {

  const [users, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/empinfo")
      .then((users) => setUser(users.data))
      .catch((err) => console.log(err));
  }, []);

  const [values, setValues] = useState([]);

  useEffect(() => {
    axios
      .get(" http://localhost:3000/mnginfo")
      .then((values) => setValues(values.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Employee Table Data</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Phone-no</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.empid}>
                <td>{user.empid}</td>
                <td>{user.empname}</td>
                <td>{user.empage}</td>
                <td>{user.empphone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
     <br></br>
     <br></br>
      <h1>Manager Table Data</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Employee_ID</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {values.map((val) => {
            return (
              <tr key={val.mngid}>
                <td>{val.mngid}</td>
                <td>{val.mngname}</td>
                <td>{val.mngempid}</td>
                <td>{val.mngloc}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default EmpRead;
