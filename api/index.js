const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello there! I am trying to learn docker!");
});

app.listen(4000, () => {
  console.log("Listening to port 4000");
});
