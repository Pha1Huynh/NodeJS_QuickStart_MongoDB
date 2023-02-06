import express from "express";
import courseController from "../controllers/courseController";
let router = express.Router();
import Course from "../models/Course";
let initWebRoutes = (app) => {
  router.get("/", async (req, res) => {
    return res.render("homePage.ejs", {
      data: await courseController.getAllCourse(),
    });
  });

  return app.use("/", router);
};

module.exports = initWebRoutes;
