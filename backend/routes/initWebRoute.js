const express = require("express");
const controller = require("../controller/getUser");
const route = express.Router();
const initWebRoute = (app) => {
  route.get("/all", controller.getUser);
  return app.use("/", route);
};
module.exports = initWebRoute;
