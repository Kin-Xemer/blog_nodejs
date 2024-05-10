const express = require("express");
const meController = require("../app/controllers/MeController");
const courseController = require("../app/controllers/CoursesController");
const router = express.Router();
router.get("/:slug", courseController.show);
router.get("/", courseController.index);

module.exports = router;
