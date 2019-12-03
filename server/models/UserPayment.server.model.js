var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var userPayment = new Schema({
    name: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    lockid: {
      type: String,
      required: true
    },
    total: {
      type: Number
    }
});

userPayment.pre('save', function(next) {
    /* your code here */
        var current = new Date();
        this.updated_at = current;
        if (!this.created_at) {
            this.created_at = current;
        }
        next();
    });
var UserPayment = mongoose.model('UserPaymentInfo', userPayment);

module.exports = UserPayment;
