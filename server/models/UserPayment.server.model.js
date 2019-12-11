var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

//userPayment schema ('lockid' will hold a string of object ids that can be parsed to get a set of unique lock entries)
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

//function called when userPayment entry saved
userPayment.pre('save', function(next) {
        var current = new Date();
        this.updated_at = current;
        if (!this.created_at) {
            this.created_at = current;
        }
        next();
    });
//initialize model
var UserPayment = mongoose.model('UserPaymentInfo', userPayment);

module.exports = UserPayment;
