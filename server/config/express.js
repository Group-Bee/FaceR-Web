const path = require("path"),
  express = require("express"),
  mongoose = require("mongoose"),
  morgan = require("morgan"),
  bodyParser = require("body-parser"),
  exampleRouter = require("../routes/examples.server.routes"),
  nodemailer = require("nodemailer");
const config = require("./config.example");
const config_locks = require('./config.locks')


// const GMAIL_USER = config.gmail.GMAIL_USER;
// const GMAIL_PASS = config.gmail.GMAIL_PASS;

module.exports.init = () => {

    /* 
          connect to database
          - reference README for db uri
      */
    //  console.log('connecting, ', config_locks.db.uri)
    //  mongoose
    //    .connect(config_locks.db.uri, {
    //      useNewUrlParser: true,
    //      useUnifiedTopology: true
    //    })
    //    .then(() => {
    //      console.log("connection to db established");
    //    })
    //    .catch(err => {
    //      console.log("db error ${err.message}");
    //      process.exit(-1);
    //    });
   
    //  fs.readFile(path.join(__dirname, '../../client/src/data/data.json'), 'utf8', function (err, data) {
    //    if (err)
    //      throw err;
    //    var store = JSON.parse(data);
    //    store.entries.forEach(function (element) {
    //      var model = new lockSchema({ id: element.id, description: element.description, image: element.image, name: element.name, price: element.price }).save(function (err) {
    //        if (err)
    //          return handleError(err);
    //      })
    //    })
    //  })

    //store data.js in database


    //read from database and store in data.js


    //read from userinfo.js and store in database

  //   mongoose.set("useCreateIndex", true);
  //   mongoose.set("useFindAndModify", false);

  //   // initialize app
  const app = express();

  //   // body parsing middleware
  //   app.use(bodyParser.json());
  //   app.use(express.urlencoded({ extended: false }));
  //   app.use(express.static(path.join(__dirname, "public")));

  //   // POST route from contact form
  //   app.post("/", (req, res) => {
  //     var transporter = nodemailer.createTransport({
  //       service: "gmail",
  //       auth: {
  //         user: config.gmail.GMAIL_USER,
  //         pass: config.gmail.GMAIL_PASS
  //       }
  //     });
  //     const mailOptions = {
  //       from: req.body.email, // sender address
  //       to: "curdledazombie@gmail.com", // list of receivers
  //       subject: req.body.name + " - " + req.body.email, // Subject line
  //       html:
  //         req.body.message +
  //         "<li> Reach " +
  //         req.body.name +
  //         " at " +
  //         req.body.email +
  //         "</li>" // plain text body
  //     };
  //     transporter.sendMail(mailOptions, function(err, info) {
  //       if (err) console.log(err);
  //       else console.log(info);
  //     });
  //     res.redirect("/");
  //   });

  //   // enable request logging for development debugging
  //   app.use(morgan("dev"));

  // add a router
  app.use("/api/example", exampleRouter);

  if (process.env.NODE_ENV === "production") {
    // Serve any static files
    app.use(express.static(path.join(__dirname, "../../client/build")));

    // Handle React routing, return all requests to React app
    app.get("*", function (req, res) {
      res.sendFile(path.join(__dirname, "../../client/build", "index.html"));
    });
  }

  return app;
};
