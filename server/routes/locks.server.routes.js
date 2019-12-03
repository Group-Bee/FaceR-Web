let locks= require('../controllers/locks.server.controller.js'),
    express = require('express'), //refers to Express the middleware helper for Node.js
    router = express.Router();

//get lock data from database when a get request is sent to /Pay/Locks
router.route('/Locks')
  .get(locks.list)

module.exports = router;
