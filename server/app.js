const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const bcrypt = require("bcrypt");
const dbConnect = require("./db/dbConnect");
dbConnect();
const User = require("./db/userModel");

app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, () =>{
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
module.exports = app;
