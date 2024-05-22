// đây là function Constructer
const Courses = require("../models/Course");
class NewsController {
  // [GET] /news
  index = async (req, res) => {
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
    res.render("courses-page/create");
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
      await course.save();
      res.redirect("/");
    } catch (error) {
      next(error);
    }
  };

  //[POST] /courses/:id/edit
  edit = async (req, res, next) => {
    try {
      const course = await Courses.findOne({ _id: req.params.id }).lean();
      res.render("me/edit", { course });
    } catch (error) {
      next(error);
    }
  };

  //[PUT] /courses/:id
  update = async (req, res, next) => {
    try {
      const formData = {
        ...req.body,
        image: `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`,
      };
      await Courses.updateOne({ _id: req.params.id }, formData);
      res.redirect("/me/stored/courses");
    } catch (error) {
      next(error);
    }
  };

  delete = async (req, res, next) => {
    try {
      await Courses.delete({ _id: req.params.id });
      res.redirect("back");
    } catch (error) {
      next(error);
    }
  };

  //course/:id/force
  force = async (req, res, next) => {
    try {
      await Courses.deleteOne({ _id: req.params.id });
      res.redirect("back");
    } catch (error) {
      next(error);
    }
  };

  //[PATCH] /courses/:id/restore
  restore = async (req, res, next) => {
    try {
      await Courses.updateOneDeleted(
        { _id: req.params.id },
        {
          $set: { deleted: false },
          $unset: { deletedAt },
        }
      );
      res.redirect("back");
    } catch (error) {
      next(error);
    }
  };
}
module.exports = new NewsController();
