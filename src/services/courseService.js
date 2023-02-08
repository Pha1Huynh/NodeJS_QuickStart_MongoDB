import Course from "../models/Course";
import { base64ArrayBuffer } from "../controllers/base64ArrayBuffer";
let getAllCourse = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await Course.find({});

      if (data) {
        resolve({
          errCode: 0,
          errMessage: "Get all course success",
          data: data,
        });
      } else {
        resolve({ errCode: 0, errMessage: "Getting ...." });
      }
    } catch (e) {
      reject(e);
    }
  });
};
let createNewCourse = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (data.name && data.image && data.description) {
        let instance = new Course();
        // let image = data.image.split("base64,")[1];
        // console.log("check data split", image);
        instance.name = data.name;
        instance.description = data.description;
        instance.image = data.image;
        let createCourse = await instance.save();
        if (createCourse) {
          resolve({
            errCode: 0,
            errMessage: "Create new course success",
          });
        } else {
          resolve({
            errCode: -1,
            errMessage: "Create new course failed",
          });
        }
      } else {
        resolve({
          errCode: -1,
          errMessage: "Missing params",
        });
      }
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
let deleteCourse = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (id) {
        let deleteCourse = await Course.deleteOne({ _id: id });

        if (deleteCourse) {
          resolve({
            errCode: 0,
            errMessage: "Delete course success",
          });
        } else {
          resolve({
            errCode: -1,
            errMessage: "Delete course failed",
          });
        }
      } else {
        resolve({
          errCode: -1,
          errMessage: "Missing params",
        });
      }
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
let updateCourse = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (data && data.id) {
        let updateCourse = await Course.findOne({ _id: data.id });

        if (updateCourse) {
          updateCourse.name = data.name;
          updateCourse.image = data.image;
          updateCourse.description = data.description;
          await updateCourse.save();
          resolve({
            errCode: 0,
            errMessage: "Update course success",
          });
        } else {
          resolve({
            errCode: -1,
            errMessage: "Update course failed",
          });
        }
      } else {
        resolve({
          errCode: -1,
          errMessage: "Missing params",
        });
      }
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = { getAllCourse, createNewCourse, deleteCourse, updateCourse };
