var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

//lock schema ('image' corresponds to path to image in project folder)
var lockSchema = new Schema({
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
        type: Number,
        required: true
    },
    incart: {
        type: Boolean,
        required: true
    },
    bought: {
      type: Boolean,
      required: true
    }
});
//function called when entry is saved
lockSchema.pre('save', function(next) {
        var current = new Date();
        this.updated_at = current;
        if (!this.created_at) {
            this.created_at = current;
        }
        next();
    });

//initialize model
var Locks = mongoose.model('Locks', lockSchema);

module.exports = Locks;
