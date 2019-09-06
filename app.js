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

const saltRounds = 10;

const User = mongoose.model("User", {

    email: String,
    password: String

})

app.get("/", (req, res)=>{

    res.render("home")

})

app.get("/register", (req, res)=>{

    res.render("register")

})

app.get("/login", (req, res)=>{

    res.render("login")

})

app.post("/register", (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    bcrypt.hash(password, saltRounds, function(err, hash) {
        
        if(err){

            console.log(err)

        }else{

            const newUser = new User({

                email: email,
                password: hash
    
            })

            newUser.save();
            res.render("secrets");
        
        }

    });

})

app.listen(3000, function () {
  console.log("Server started on port 3000");
});