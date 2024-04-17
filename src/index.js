import express from 'express';
import morgan from 'morgan';
import { engine } from "express-handlebars";
import path from'path';
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const port = 3000;
// HTTP Logger
app.use(
  morgan("combined")
);
//Static file
app.use(express.static(path.join(__dirname, "public")));
// Template engine
// Đổi tên mở rộng cho gọn
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resource/views"));
app.get('/', (req, res) => {
   res.render('home');
});
app.get('/news', (req, res) => {
  res.render('news');
});
  //127.0.0.1 - local host
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
