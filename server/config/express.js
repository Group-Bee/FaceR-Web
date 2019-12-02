const path = require("path"),
  express = require("express"),
  mongoose = require("mongoose"),
  morgan = require("morgan"),
  bodyParser = require("body-parser"),
  testimonialsRouter = require("../routes/testimonials.server.routes"),
  nodemailer = require("nodemailer");

const GMAIL_USER = (process.env.GMAIL_USER || require("./config").gmail.GMAIL_USER);
const GMAIL_PASS = (process.env.GMAIL_PASS || require("./config").gmail.GMAIL_PASS);

module.exports.init = () => {

  /* 
         connect to database
         - reference README for db uri
     */
  mongoose
    .connect(process.env.DB_URI || require("./config").db.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log("connection to db established");
    })
    .catch(err => {
      console.log("db error ${err.message}");
      process.exit(-1);
    });
  mongoose.set("useCreateIndex", true);
  mongoose.set("useFindAndModify", false);

  // initialize app
  const app = express();

  // body parsing middleware
  app.use(bodyParser.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(express.static(path.join(__dirname, "public")));

  //   // POST route from contact form
  app.post("/", (req, res) => {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASS
      }
    });
    const mailOptions = {
      from: req.body.email, // sender address
      to: "curdledazombie@gmail.com", // list of receivers
      subject: req.body.name + " - " + req.body.email, // Subject line
      html:
        req.body.message +
        "<li> Reach " +
        req.body.name +
        " at " +
        req.body.email +
        "</li>" // plain text body
    };
    transporter.sendMail(mailOptions, function(err, info) {
      if (err) console.log(err);
      else console.log(info);
    });
    res.redirect("/");
  });

  // enable request logging for development debugging
  app.use(morgan("dev"));

  //Router to display testimonials when on About page
  app.use("/About", testimonialsRouter);

  if (process.env.NODE_ENV === "production") {
    // Serve any static files
    app.use(express.static(path.join(__dirname, "../../client/build")));

    // Handle React routing, return all requests to React app
    app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "../../client/build", "index.html"));
    });
  }

  return app;
};
