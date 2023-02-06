import courseService from "../services/courseService";

let getAllCourse = async (req, res) => {
  try {
    let data = await courseService.getAllCourse();
    console.log("check data", data.data);
    return data.data;
  } catch (e) {
    // return res.status(200).json({
    //   errCode: -1,
    //   errMessage: "Error from server",
    // });
    return e;
  }
};
module.exports = { getAllCourse };
