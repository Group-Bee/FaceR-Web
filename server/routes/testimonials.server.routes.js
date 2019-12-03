/* Dependencies */
var testimonials = require('../controllers/testimonials.server.controller.js'), 
    express = require('express'), //refers to Express the middleware helper for Node.js
    router = express.Router(); //refers to the Router() function in Express the middleware helper for Node.js


//These routes handle is getting the testimonials data from the database, as well as creating new testimonials in the database
router.route('/Testimonials')
  .get(testimonials.list)
  .post(testimonials.create)

//These routes handle reading individual testimonials, updating individual testimonials, and deleting individual testimonials
router.route('/Testimonials/:testimonialId')
  .get(testimonials.read)
  .put(testimonials.update)
  .delete(testimonials.delete)

router.param('testimonialId', testimonials.testimonialByID);

module.exports = router;