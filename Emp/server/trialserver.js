const { Client } = require("pg");
const express = require("express");

const app = express();
const port = 3000;

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "admin123",
  database: "trial",
});

client.connect();

app.get("/test", async (req, res) => {
  try {
    const { rows } = await client.query("SELECT * FROM test");
    res.send(rows);
  } catch (err) {
    console.error("Error executing query", err.stack);
    res.status(500).send("Error executing query");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
