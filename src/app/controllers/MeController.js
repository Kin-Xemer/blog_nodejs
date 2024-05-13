// đây là function Constructer

const Courses = require("../models/Course");
class MeController {
  // [GET] /me/stored/courses
  storedCourses = async (req, res, next) => {
   try {
     const courses = await Courses.find({}).lean();
     res.render("me/stored-courses", { courses });
   } catch (error) {
    next(error);
   }
  };

  deletedCourses = async (req, res, next) => {
   try {
     const courses = await Courses.findDeleted({}).lean();
     res.render("me/deleted-courses", { courses });
   } catch (error) {
    next(error);
   }
  };
}
module.exports = new MeController();
