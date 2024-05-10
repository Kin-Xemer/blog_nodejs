const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
require("dotenv").config();
const path = require("path");
const route = require("./routes/index.js");
const methodOverride = require("method-override");
const app = express();
const db = require("./config/db");
db.connect();
// route init

// HTTP Logger
// app.use(morgan("combined"));

// gửi từ forrmđây là body parser
app.use(express.urlencoded({ extended: false }));

//gửi từ file js như là axios fetch .vv.v
app.use(express.json());
// apply middleware

//Static file
app.use(express.static(path.join(__dirname, "public")));
// Template engine
// Đổi tên mở rộng cho gọn
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.use(methodOverride("_method"));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resource", "views"));
//127.0.0.1 - local host
route(app);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
