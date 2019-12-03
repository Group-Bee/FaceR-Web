
/* Dependencies */
var mongoose = require('mongoose'), 
    Testimonial = require('../models/testimonials.server.model.js')
    
/*
  In this file, I will use Mongoose queries in order to retrieve/add/remove/update testimonials.
  On an error I will send a 404 status code, as well as the error message. 
  On success (aka no error), I will send the testimonial(s) as JSON in the response.

  HINT: if you are struggling with implementing these functions refer back to this tutorial 
  https://www.callicoder.com/node-js-express-mongodb-restful-crud-api-tutorial/
  or
  https://medium.com/@dinyangetoh/how-to-build-simple-restful-api-with-nodejs-expressjs-and-mongodb-99348012925d
  

  If you are looking for more understanding of exports and export modules - 
  https://www.sitepoint.com/understanding-module-exports-exports-node-js/
  or
  https://adrianmejia.com/getting-started-with-node-js-modules-require-exports-imports-npm-and-beyond/
 */

/* Retreive all the directory testimonials */
exports.list = function(req, res) {
	//This uses the Testimonial schema already defined and returns all testimonials of that schema in a variable called 'testimonials'
	Testimonial.find(function(err, testimonials){
		//This will catch any errors and send the correct error response
		if (err)
			res.send(err);
		//Will send all testimonials to the server
        res.json(testimonials);
		});
};

/* Create a testimonial */
exports.create = function(req, res) {

  /* Instantiate a testimonial */
  //it is instantiated with the JSON data that is passed in the request
  var testimonial = new Testimonial(req.body);
 
  /* Then save the testimonial */
  testimonial.save(function(err) {
    if(err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(testimonial);
    }
  });
};

/* Show the current testimonial */
exports.read = function(req, res) {
  /* send back the testimonial as json from the request */
  res.json(req.testimonial);
};

/* Update a testimonial - note the order in which this function is called by the router*/
exports.update = function(req, res) {
	var testimonial = req.testimonial;

	//Find the testimonial with the ID we want to update
	Testimonial.findByIdAndUpdate(testimonial._id, req.body, {new: true}, function(err, testimonial2){
		//Check for errors
		if (err)
			res.status(404).send(err);
			
		/* Replace the testimonial's properties with the new properties found in req.body */
		testimonial2 = req.body;
		testimonial2._id = testimonial._id;
		
		/* Save the testimonial */
		testimonial.save(function(err){
			//check for errors
			if (err)
				res.status(404).send(err);
			res.json(testimonial2);
		});
	});	
};

/* Delete a testimonial */
exports.delete = function(req, res) {
  var testimonial = req.testimonial;

	Testimonial.findByIdAndRemove(testimonial, function(err){
		//Checks if the testimonial exists in the database
		if (!testimonial){
			res.status(404).json({
				message: "Testimonial not found"
			});
		}
		//Catch for all errors
		if (err)
			res.send(err);
		//If deletes successfully, send OK response
		res.json({
			message: "Testimonial successfully delected"
		});
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