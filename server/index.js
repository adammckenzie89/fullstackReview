require("dotenv").config();
const express = require("express");

const app = express();
const PORT = 5050;

app.listen(PORT, () => console.log(`you are now listening to ${PORT}`));
