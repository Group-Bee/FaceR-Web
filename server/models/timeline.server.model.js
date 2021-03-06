var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;


var timelineSchema = new Schema({
    date:{
        type: String,
        required: true
    }, 
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    }
});

timelineSchema.pre('save', function(next) {
        var current = new Date();
        this.updated_at = current;
        if (!this.created_at) {
            this.created_at = current;
        }
        next();
    });
var TimelineData = mongoose.model('timeline', timelineSchema);

module.exports = TimelineData;