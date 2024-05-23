const { Client } = require("pg");
const express = require("express");

const app = express();
const port = 3000;

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "admin123",
  database: "empdb",
});

client.connect();

app.get("/empinfo", async (req, res) => {
  try {
    const { rows } = await client.query("Select * from employee");
    res.send(rows);
  } catch (err) {
    console.error("Errors are", err.stack);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
