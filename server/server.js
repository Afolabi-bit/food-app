const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//Connect to express
const app = express();

// connect to mongoDB
const dbURI =
  "mongodb+srv://maverickoluwatomisin:DiW5TWbOOeeRllYx@cluster0.c2p5ceh.mongodb.net/food-app-db?retryWrites=true&w=majority";

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

//SCHEMA
