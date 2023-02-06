import Course from "../models/Course";

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
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = { getAllCourse };
