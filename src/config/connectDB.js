const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect("mongodb://127.0.0.1/f8_education_dev");
    console.log("Connect DB successfullsy");
  } catch (e) {
    console.log("Connect DB failure");
  }
}
module.exports = { connectDB };
