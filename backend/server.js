const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./models");
const bodyParser = require("body-parser");
const errorHandlers = require("./handlers/error");
const PORT = 8080;
app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
  let err = new Error("Not found");
  err.status = 404;
  next(err);
});

app.use(errorHandlers);
app.listen(PORT, () => {
  console.log("App started");
});
