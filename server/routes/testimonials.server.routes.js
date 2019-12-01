/* Dependencies */
var testimonials = require('../controllers/testimonials.server.controller.js'), 
    express = require('express'), //refers to Express the middleware helper for Node.js
    router = express.Router(); //refers to the Router() function in Express the middleware helper for Node.js

/* 
  These method calls are responsible for routing requests to the correct request handler.
  Take note that it is possible for different controller functions to handle requests to the same route.
 */
//The only route we need to handle is getting the testimonials data from the database
router.route('/Testimonials')
  .get(testimonials.list)

router.param('testimonialId', testimonials.testimonialByID);

module.exports = router;