const express = require("express");
const router = express.Router();
const csvController = require("../controllers/vehicleController");
const upload = require("../middleware/upload");

let routes = (app) => {
  router.post("/upload", upload.single("file"), csvController.upload);
  router.get("/getall", csvController.getTutorials);

  app.use("/api/csv", router);
};

module.exports = routes;