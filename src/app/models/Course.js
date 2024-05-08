const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 mongoose.plugin(slug)
 
const Courses = new Schema(
  {
    name: { type: String, maxLength: 255, required: true },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    videoId: { type: String, maxLength: 255 },
    level: { type: String, maxLength: 255 },
    slug: { type: String, slug: "name"},
  },
  { timestamps: true }
);
// tạo 1 model
const courseModel = mongoose.model("Course", Courses);
// trả ra 1 model
module.exports = courseModel;
