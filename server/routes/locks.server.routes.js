let locks= require('../controllers/locks.server.controller.js'),
express = require('express'), //refers to Express the middleware helper for Node.js
router = express.Router();

//a get request to the following route will retrieve all lock models in the lock collection
router.route('/Locks')
.get(locks.list)

//update lock info on the following request (this route will be used to change the 'incart' field)
router.route('/Locks/:lockid')
.get(locks.read)
.put(locks.update)

router.param('lockid', locks.locksByID)

module.exports = router;
