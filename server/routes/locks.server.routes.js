let locks= require('../controllers/locks.server.controller.js'),
express = require('express'), //refers to Express the middleware helper for Node.js
router = express.Router();

//get lock data from database when a get request is sent to /Pay/Locks
router.route('/Locks')
.get(locks.list)

//get lock information whenever a get request is sent to /About/Locks
router.route('/Locks')
.get(locks.list)

//update lock info on the following request
router.route('/Locks/:lockid')
.get(locks.read)
.put(locks.update)

router.param('lockid', locks.locksByID)

module.exports = router;
