// đây là function Constructer
const Courses = require("../models/Course");
class NewsController {
  // [GET] /news
  index = async(req, res) => {
    res.render("home");
  };
  // [GET] /news:slug

  show = async (req, res, next) => {
    try {
      const course = await Courses.findOne({ slug: req.params.slug }).lean();
      res.render("courses-page/show", { course });
    } catch (error) {
      next(error);
    }
  };

  create = async (req, res, next) => {
    res.render("courses/create");
  };

  //[POST] /courses/store
  store = async (req, res, next) => {
    try {
      const formData = {
        ...req.body,
        image: `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`,
      };
      // Tạo ra đối tượng mới là courses
      const course = new Courses(formData);
      console.log(course);
      // await course.save();
      res.redirect("/");
    } catch (error) {
      next(error);
    }
  };
}
module.exports = new NewsController();
