const express = require("express");
const cors = require("cors");
const { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } = require('firebase/firestore');
const User = require("./config");
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  const snapshot = await getDocs(User);
  const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  res.send(list);
});

app.post("/create", async (req, res) => {
  const data = req.body;
  await addDoc(User, data);
  res.send({ msg: "User Added" });
});

app.put("/update/:id", async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const userDoc = doc(User, id);
  await updateDoc(userDoc, data);
  res.send({ msg: "Updated" });
});

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  const userDoc = doc(User, id);
  await deleteDoc(userDoc);
  res.send({ msg: "Deleted" });
});


app.listen(4000, () => console.log("Up & Running *4000"));
