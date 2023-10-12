const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("./models/userSchema");
require("dotenv").config();

//Connect to express
const app = express();

// Secret key
const SECRET = process.env.SECRET_KEY;

// connect to mongoDB
const dbURI = process.env.DB_URI;

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(3001, () => {
      console.log("Server is connected to port 3001 and connected to mongoDB");
    });
  })
  .catch((err) => {
    console.log("Unable to connect to server and/or mongoDB");
  });

//middleware
app.use(bodyParser.json());
app.use(cors());

//Routes
app.post("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const newUser = new User({ email, username, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "user created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error signing up" });
  }
});

//Get registered users
app.get("/register", async (req, res) => {
  try {
    const users = await User.find();
    res.status(201).json(users);
  } catch (error) {
    res.status(500).json({ error: "unable to get users" });
  }
});

//Get Login
app.post("login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const token = jwt.sign({ userId: user._id }, SECRET_KEY, {
      expiresIn: "1hr",
    });
    res.json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ error: "Error logging in" });
  }
});
