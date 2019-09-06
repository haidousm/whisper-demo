const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/WhisperDemoDB", {
  useNewUrlParser: true
});

app.get("/", (req, res)=>{

    res.render("home")

})

app.get("/register", (req, res)=>{

    res.render("register")

})

app.get("/login", (req, res)=>{

    res.render("login")

})

app.listen(3000, function () {
  console.log("Server started on port 3000");
});