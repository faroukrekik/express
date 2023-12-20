const express = require("express");
const app = express();

const verify = function (req, res, next) {
  let date = new Date();
  let day = date.getDay();
  let hour = date.getHours();
  if (hour > 8 && hour < 23 && day > 0 && day < 6) {
    next();
  } else {
    res.send("reseau taya7");
  }
};

app.use(verify);

app.use(express.static("pages"));

const PORT = process.env.PORT || 3000;

var server = app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`Server is runing on ${PORT}`)
);
