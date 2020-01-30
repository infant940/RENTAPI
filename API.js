const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongo = require("mongodb");
const key = require("./key").mongoURI;
const register = require("./Register.model");
const mongoose = require("mongoose")

let dbo;
const app = express();

app.use(bodyParser.json());
app.use(cors());
mongo.connect(
  key,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    if (err) throw err;
    dbo = client.db("RegisterMembers");
    console.log("DB Connected");
  }
);

app.post("/register", function(req, res) {
  var myobj = {
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    PhoneNumber: req.body.PhoneNumber,
    Email: req.body.Email,
    UserName: req.body.UserName,
    Password: req.body.Password,
    ConfirmPassword: req.body.ConfirmPassword
  };
  dbo.collection("Login").insertOne(myobj, function(err, obj) {
    if (err) throw err;
    console.log("inserted");
    res.send("register is sucessfull");
  });
});

app.listen(4000, "localhost", () => console.log("Running"));
