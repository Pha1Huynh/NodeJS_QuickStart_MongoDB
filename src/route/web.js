import express from "express";
import courseController from "../controllers/courseController";
let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/api/get-all-course", courseController.getAllCourse);

  return app.use("/", router);
};

module.exports = initWebRoutes;
