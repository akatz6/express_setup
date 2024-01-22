const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`We are listening on port number ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("My first get");
});

app.get("/hello", (req, res) => {
  res.send("Hello I am here ");
});

app.get("/hello/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Hello my name is ${name}`);
});

//?name=Aaron
app.get("/hello-query/", (req, res) => {
  const name = req.query.name;
  res.send(`Hello my name is ${name}`);
});

app.get("/html", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
