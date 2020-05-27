const express = require("express");
const app = express();
// const host = "0.0.0.0";
const port = "81";
//confugure ti use pug template engine
app.set("view engine", "pug");
app.set("views", "./views");
app.get("/", (req, res) => {
  res.render('index');
});

app.listen(port);
