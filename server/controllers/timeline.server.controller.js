
/* Dependencies */
var mongoose = require('mongoose'), 
    Timeline = require('../models/timeline.server.model.js')

/* Retreive all the directory listings, sorted alphabetically by listing code */
exports.list = function(req, res) {
	//This uses the Testimonial schema already defined and returns all listings of that schema in a variable called 'testimonials'
	Timeline.find(function(err, timeline){
		//This will catch any errors and send the correct error response
		if (err)
			res.send(err);
		//Will send all listings to the server
        res.json(timeline);
		});
};

/* 
  Middleware: find a testimonial by its ID, then pass it to the next request handler. 
 */
exports.timelineByID = function(req, res, next, id) {
    timeline.findById(id).exec(function(err, timeline) {
      if(err) {
        res.status(400).send(err);
      } else {
        req.timeline = timeline;
        next();
      }
    });
  };