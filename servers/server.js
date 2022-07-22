const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

const { NODE_PORT } = process.env;

const port = NODE_PORT;

app.use(cors());
app.options("*", cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );
  next();
});

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require("./routes");

const sampleList_Router = require("./router/sampleList_Router");

app.get(routes.getSampleList, sampleList_Router);

const server = app.listen(port, () => {
  console.log(`express is running ${port}✨`);
});
