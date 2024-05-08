const newsRouter = require("./newsRouter");
const siteRouter = require("./siteRouter");
const courseRouter = require("./coursesRouter");
const meRouter = require("./meRouter");

function route(app) {
  app.use("/news", newsRouter);
  app.use("/me", meRouter);
  app.use("/courses", courseRouter);
  app.use("/", siteRouter);
}
module.exports = route;
