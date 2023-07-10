const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require('./auth');
const dbConnect = require("./db/dbConnect");
dbConnect();

const User = require("./db/userModel");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.post("/register", (req, res) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hashedPassword) => {
      const user = new User({
        email: req.body.email,
        password: hashedPassword,
      });
      user
        .save()
        .then((result) => {
          res.status(200).send({
            message: "User Created Successfully",
            result,
          });
        })
        .catch((err) => {
          res.status(500).send({
            message: "Error Creating User",
            err,
          });
        });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Password was not hashed Successfully",
        err,
      });
    });
});

app.post("/login", (req, res) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      bcrypt
        .compare(req.body.password, user.password)
        .then((passwordCheck) => {
          if (!passwordCheck) {
            return res.status(400).send({
              message: "Password does not match",
              error,
            });
          }
          const token = jwt.sign(
            {
              userId: user._id,
              userEmail: user.email,
            },
            "RANDOM-TOKEN",
            { expiresIn: "24h" }
          );
          res.status(200).send({
            message: "Login Successful!",
            email: user.email,
            token,
          });
        })
        .catch((error) => {
          res.status(400).send({
            message: "Password does not match",
            error,
          });
        });
    })
    .catch((error) => {
      res.status(400).send({
        message: "email not found",
        error,
      });
    });
});

app.get("/free-endpoint", (req,res)=>{
  res.json({message : "You are free to access me anytime"});
});

app.get("/auth-endpoint",auth, (req,res)=>{
  res.json({message: "You are authorised to access me"});
});

module.exports = app;
