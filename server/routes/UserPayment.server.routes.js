let userpayment = require('../controllers/UserPayment.server.controller.js')
express = require('express'), //refers to Express the middleware helper for Node.js
router = express.Router();

//we will only need to update the userPaymentInfo collection from within the app
router.route('/Pay')
  .post(userpayment.update)


module.exports = router;
