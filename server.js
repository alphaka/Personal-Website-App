const express = require("express");
const nodemailer = require("nodemailer");
const path = require("path");
const app = express();

const PORT = 3000;
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
  const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${req.body.name}
      <li>Email: ${req.body.email}
      <li>Subject: ${req.body.subject}
      <li>Message: ${req.body.message}
    </ul>
  `;
  res.send(req.body);
});

app.listen(PORT, () => log("Server is starting on PORT, ", PORT));
