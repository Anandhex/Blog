const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./models");
const { signup, signin } = require("./handlers/auth");
const bodyParser = require("body-parser");
const errorHandlers = require("./handlers/error");
const PORT = 8080;
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.post("/api/signup", signup);
app.post("/api/signin", signin);
app.use((req, res, next) => {
  let err = new Error("Not found");
  err.status = 404;
  next(err);
});

app.use(errorHandlers);
app.listen(PORT, () => {
  console.log("App started");
});
