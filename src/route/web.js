import express from "express";
import courseController from "../controllers/courseController";
let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/api/get-all-courses", courseController.getAllCourse);
  router.post("/api/create-new-couse", courseController.createNewCourse);
  router.delete("/api/delete-course", courseController.deleteCourse);
  router.put("/api/update-course", courseController.updateCourse);
  return app.use("/", router);
};

module.exports = initWebRoutes;
