var timeline = require('../controllers/timeline.server.controller.js'), 
    express = require('express'),
    router = express.Router();

//Get timeline data from database
router.route('/Timeline')
  .get(timeline.list)

router.param('timelineId', timeline.timelineByID);

module.exports = router;