require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const authController = require("./controllers/authController");

const app = express();
const PORT = 5050;

const { CONNECTION_STRING, SECRET } = process.env;
app.use(express.json());

app.use(
  session({
    secret: SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24
    }
  })
);

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("connected");
});

app.post("/auth/signup", authController.signup);

app.listen(PORT, () => console.log(`you are now listening to ${PORT}`));
