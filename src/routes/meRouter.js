
const express = require("express");
const meController = require("../app/controllers/MeController");
const SiteController = require("../app/controllers/SiteController");
const router = express.Router();
router.get("/stored/courses", meController.storedCourses);
router.get("/trash/courses", meController.deletedCourses);

module.exports = router;
