/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/* Create your schema for the data in the testimonials.json file that will define how data is saved in your database
     See https://mongoosejs.com/docs/guide.html for examples for creating schemas
     See also https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
  */
var testimonialSchema = new Schema({
  //Check out - https://mongoosejs.com/docs/guide.html
  testimonial: {type: String, required: true},
  name: {type: String, required: true},
  created_at: Date,
  updated_at: Date
});

/* Create a 'pre' function that adds the updated_at (and created_at if not already there) property 
   See https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
*/
testimonialSchema.pre('save', function(next) {
  //gets the current date
  var currentDate = new Date();
  
  //save updated_at to be current date
  this.updated_at = currentDate;
  
  //if created_at is not already there, saves the date the document was created
  if(!this.created_at){
	  this.created_at = currentDate;
	  }
	  
  next();
});

/* Use your schema to instantiate a Mongoose model */
//Check out - https://mongoosejs.com/docs/guide.html#models
var Testimonial = mongoose.model('Testimonial', testimonialSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Testimonial;
