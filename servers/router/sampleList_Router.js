const express = require("express");
const routes = require("../routes");

const sampleList_Controller = require("../controller/sampleList_Controller");

const sampleList_Router = express.Router();

sampleList_Router.get(
  routes.getSampleList,
  sampleList_Controller.getSampleList,
);

module.exports = sampleList_Router;
