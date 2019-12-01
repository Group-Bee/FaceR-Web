const express = require("./config/express.js");
const nodemailer = require("nodemailer");
// Use env port or default

const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;

const app = express.init();

app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port, () => console.log(`Server now running on port ${port}!`));
