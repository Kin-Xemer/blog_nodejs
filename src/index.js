const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const path = require("path");
const route = require("./routes/index.js");

const app = express();
const port = 3000;

// route init
route(app);

// HTTP Logger
// app.use(morgan("combined"));

// gửi từ forrmđây là body parser
app.use(express.urlencoded({ extended: true }));

//gửi từ file js như là axios fetch .vv.v
app.use(express.json());
// apply middleware

//Static file
app.use(express.static(path.join(__dirname, "public")));
// Template engine
// Đổi tên mở rộng cho gọn
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resource/views"));

//127.0.0.1 - local host
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
