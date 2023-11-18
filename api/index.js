const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

//Database Connection with Mongose
mongoose
  .connect("mongodb://root:Admin12345@mongo:27017/School?authSource=admin")
  .then(() => console.log("Connected to mongo"))
  .catch((err) => console.log(err));

const Student = mongoose.model("Student", { name: String, phone: String });

app.post("/api/students", async (req, res) => {
  const student = new Student({ name: req.body.name, phone: req.body.phone });
  const r = await student.save();
  return res.status(201).json(r);
});

app.get("/api/students", async (req, res) => {
  const result = await Student.find();
  return res.status(200).json(result);
});

app.delete("/api/students/:id", async (req, res) => {
  const result = await Student.deleteOne({ _id: req.params.id });
  return res.status(200).json(result);
});

app.get("/", async (req, res) => {
  res.status(200).json({
    data: "Welcome to our website",
    message: "Successfull",
  });
});

app.listen(4000, () => {
  console.log("Listening to port 4000");
});
