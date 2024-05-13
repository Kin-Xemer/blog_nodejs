const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const mongooseDelete = require("mongoose-delete");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const CoursesSchema = new Schema(
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
// Add plugin
 mongoose.plugin(slug);
 CoursesSchema.plugin(mongooseDelete, {
   deletedAt: true,
   overrideMethods: "all", // ghi đè tất cả những phương thức cơ bản của mongo
 });
// tạo 1 model
const courseModel = mongoose.model("Course", CoursesSchema);
// trả ra 1 model
module.exports = courseModel;
