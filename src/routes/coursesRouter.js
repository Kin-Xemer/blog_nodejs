const express = require("express");
const meController = require("../app/controllers/MeController");
const courseController = require("../app/controllers/CoursesController");
const router = express.Router();
router.get("/create", courseController.create);
router.post("/stored", courseController.store);
router.get("/:slug", courseController.show);

module.exports = router;
