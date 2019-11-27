var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;


var lockSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    description:{
        type: String
    }, 
    image: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
});

lockSchema.pre('save', function(next) {
    /* your code here */
        var current = new Date();
        this.updated_at = current;
        if (!this.created_at) {
            this.created_at = current;
        }
        next();
    });
var Locks = mongoose.model('Locks', listingSchema);

module.exports = Locks;