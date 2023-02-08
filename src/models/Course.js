const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Course = new Schema(
  {
    name: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 600 },
    image: { type: Buffer, contentType: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", Course);
