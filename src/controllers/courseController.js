import courseService from "../services/courseService";

let getAllCourse = async (req, res) => {
  try {
    let data = await courseService.getAllCourse();

    return res.status(200).json(data);
  } catch (e) {
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from server",
    });
  }
};
let createNewCourse = async (req, res) => {
  try {
    let data = await courseService.createNewCourse(req.body);

    return res.status(200).json(data);
  } catch (e) {
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from server",
    });
  }
};
let deleteCourse = async (req, res) => {
  try {
    let data = await courseService.deleteCourse(req.query._id);

    return res.status(200).json(data);
  } catch (e) {
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from server",
    });
  }
};
let updateCourse = async (req, res) => {
  try {
    let data = await courseService.updateCourse(req.body);

    return res.status(200).json(data);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from server",
    });
  }
};
module.exports = { getAllCourse, createNewCourse, deleteCourse, updateCourse };
