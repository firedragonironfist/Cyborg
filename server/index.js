const bcrypt = require("bcrypt");
const dbConnect = require("./db/dbConnect");
dbConnect();
const User = require('./db/userModel');