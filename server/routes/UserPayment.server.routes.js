let userpayment = require('../controllers/UserPayment.server.controller.js')
express = require('express'), //refers to Express the middleware helper for Node.js
router = express.Router();

router.route('/Pay')
  .post(userpayment.update)


module.exports = router;
