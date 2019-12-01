
/* Dependencies */
var mongoose = require('mongoose'), 
    Testimonial = require('../models/testimonials.server.model.js')
    
/*
  In this file, you should use Mongoose queries in order to retrieve/add/remove/update listings.
  On an error you should send a 404 status code, as well as the error message. 
  On success (aka no error), you should send the listing(s) as JSON in the response.

  HINT: if you are struggling with implementing these functions refer back to this tutorial 
  https://www.callicoder.com/node-js-express-mongodb-restful-crud-api-tutorial/
  or
  https://medium.com/@dinyangetoh/how-to-build-simple-restful-api-with-nodejs-expressjs-and-mongodb-99348012925d
  

  If you are looking for more understanding of exports and export modules - 
  https://www.sitepoint.com/understanding-module-exports-exports-node-js/
  or
  https://adrianmejia.com/getting-started-with-node-js-modules-require-exports-imports-npm-and-beyond/
 */

/* Retreive all the directory listings, sorted alphabetically by listing code */
exports.list = function(req, res) {
	//This uses the Testimonial schema already defined and returns all listings of that schema in a variable called 'testimonials'
	Testimonial.find(function(err, testimonials){
		//This will catch any errors and send the correct error response
		if (err)
			res.send(err);
		//Will send all listings to the server
        res.json(testimonials);
		});
};

/* 
  Middleware: find a testimonial by its ID, then pass it to the next request handler. 
 */
exports.testimonialByID = function(req, res, next, id) {
    Testimonial.findById(id).exec(function(err, testimonial) {
      if(err) {
        res.status(400).send(err);
      } else {
        req.testimonial = testimonial;
        next();
      }
    });
  };