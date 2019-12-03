
//Interested in learning more about testing and the libraries used in this file?
//Check out - https://mochajs.org/#hooks - Structure of tests
//Check out - https://mochajs.org/#asynchronous-code - Asyn options


var should = require('should'), 
    mongoose = require('mongoose'), 
    Testimonials = require('../models/testimonials.server.model'), 
    config = require('../config/config');

var testimonials, id;

testimonials =  {
    testimonial: "Hello World!",
    name: "John"
}

describe('Testimonial Schema Unit Tests', function() {

  before(function(done) {
    mongoose.connect(config.db.uri, { useNewUrlParser: true });
    mongoose.set('useCreateIndex', true);
    mongoose.set('useFindAndModify', false);
    done();
  });

  describe('Saving to database', function() {
    /*
      Mocha's default timeout for tests is 2000ms. To ensure that the tests do not fail 
      prematurely, we can increase the timeout setting with the method this.timeout()
     */
    this.timeout(10000);

    it('saves properly when testimonial and name provided', function(done){
      new Testimonials({
        testimonial: testimonials.testimonial, 
        name: testimonials.name
      }).save(function(err, testimonials){
        should.not.exist(err);
        id = testimonials._id;
        done();
      });
    });

    it('saves properly when all two properties provided', function(done){
      new Testimonials(testimonials).save(function(err, testimonials){
        should.not.exist(err);
        id = testimonials._id;
        done();
      });
    });

    it('throws an error when name not provided', function(done){
      new Testimonials({
        testimonial: testimonials.testimonial
      }).save(function(err){
        should.exist(err);
        done();
      })
    });

    it('throws an error when testimonial not provided', function(done){
        new Testimonials({
          name: testimonials.name
        }).save(function(err){
          should.exist(err);
          done();
        })
    });

  });

  afterEach(function(done) {
    if(id) {
      Testimonials.deleteOne({ _id: id }).exec(function() {
        id = null;
        done();
      });
    } else {
      done();
    }
  });
});