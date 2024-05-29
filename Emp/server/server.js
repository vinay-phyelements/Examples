const { Client } = require("pg");
const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "admin123",
  database: "empdatabase",
});

client.connect();

//API for fetching the values from Employeetb
app.get("/empinfo", async (req, res) => {
  try {
    const { rows } = await client.query("SELECT * FROM EMPLOYEETB");
    res.send(rows);
  } catch (err) {
    console.error("Errors are", err.stack);
  }
});

app.post("/empinfo", async (req, res) => {
  try {
    const { empname, empage, empphone } = req.body;
    const query =
      "INSERT INTO EMPLOYEETB (empname, empage, empphone) VALUES ($1, $2, $3) RETURNING *";
    const { rows } = await client.query(query, [empname, empage, empphone]);
    res.send(rows[0]);
  } catch (err) {
    console.error("Error:", err.stack);
  }
});

app.put("/empinfo/:empid", async (req, res) => {
  try {
    const empid = parseInt(req.params.empid);
    const { empname, empage, empphone } = req.body;
    const query =
      "UPDATE EMPLOYEETB SET empname=$1, empage=$2, empphone=$3 WHERE empid=$4 RETURNING *";
    const { rows } = await client.query(query, [empname,empage,empphone,empid]);
    res.send(rows[0]);
  } catch (err) {
    console.error("Error:", err.stack);
  }
});

app.delete("/empinfo/:empid", async (req, res) => {
  try {
    const empid = parseInt(req.params.empid);
    const query = "DELETE FROM EMPLOYEETB WHERE empid=$1 RETURNING *";
    const { rows } = await client.query(query, [empid]);
    res.send(rows[0]);
  } catch (err) {
    console.error("Error:", err.stack);
  }
});

//API for fetching the values from Managertb
app.get("/mnginfo", async (req, res) => {
  try {
    const { rows } = await client.query("SELECT * FROM MANAGERTB");
    res.send(rows);
  } catch (err) {
    console.error("Errors are", err.stack);
  }
});

app.post("/mnginfo", async (req, res) => {
  try {
    const { mngname, mngempid, mngloc } = req.body;
    const query =
      "INSERT INTO MANAGERTB (mngname, mngempid, mngloc) VALUES ($1, $2, $3) RETURNING *";
    const { rows } = await client.query(query, [mngname, mngempid, mngloc]);
    res.send(rows[0]);
  } catch (err) {
    console.error("Error:", err.stack);
  }
});

app.put("/mnginfo/:mngid", async (req, res) => {
  try {
    const mngid = parseInt(req.params.mngid);
    const { mngname, mngempid, mngloc } = req.body;
    const query =
      "UPDATE MANAGERTB SET mngname=$1, mngempid=$2, mngloc=$3 WHERE mngid=$4 RETURNING *";
    const { rows } = await client.query(query, [
      mngname,
      mngempid,
      mngloc,
      mngid,
    ]);
    res.send(rows[0]);
  } catch (err) {
    console.error("Error:", err.stack);
  }
});

app.delete("/mnginfo/:mngid", async (req, res) => {
  try {
    const mngid = parseInt(req.params.mngid);
    const query = "DELETE FROM MANAGERTB WHERE mngid=$1 RETURNING *";
    const { rows } = await client.query(query, [mngid]);
    res.send(rows[0]);
  } catch (err) {
    console.error("Error:", err.stack);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
