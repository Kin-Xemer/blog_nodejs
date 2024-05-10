// đây là function Constructer
const Courses = require("../models/Course");
class SiteController {
  // [GET] /home
  index = async (req, res, next) => {
    try {
    const courses = await Courses.find({}).lean();
    res.render("home", { courses });
    } catch (error) {
      next(error);
    }
  };
  // [GET] /search

  search = (req, res) => {
    res.render("search");
  };
}
module.exports = new SiteController();
