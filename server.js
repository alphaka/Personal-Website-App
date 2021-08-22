const express = require("express");
const sendMail = require("./mail");
const path = require("path");
const app = express();

const log = console.log;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static folder
app.use(express.static(__dirname + "/public"));

// Body Parses Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/contact", (req, res) => {
  const { name, email, subject, message } = req.body;
  sendMail(name, email, subject, message, function (err, data) {
    if (err) {
      res.status(500).send({ message: "Internal Error" });
    } else {
      res.render("contact", { name, email });
    }
  });
});

app.listen(3000, () => log("Server is starting on PORT 3000"));
