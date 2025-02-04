const express = require("express");
const connect = require("./db/db");
const userModel = require("./model/user.model");
const app = express();

app.set("view engine", "ejs");
connect();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
  res.send("hello");
});
app.post("/create", async (req, res) => {
  const { username, email, password, profileImage } = req.body;
  console.log(req.body);
  const user = await userModel.create({
    username: username,
    email: email,
    password: password,
    profileImage: profileImage,
  });
  res.send(user);
});
module.exports = app;
