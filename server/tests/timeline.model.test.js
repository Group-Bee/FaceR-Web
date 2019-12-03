
//Interested in learning more about testing and the libraries used in this file?
//Check out - https://mochajs.org/#hooks - Structure of tests
//Check out - https://mochajs.org/#asynchronous-code - Asyn options


var should = require('should'), 
    mongoose = require('mongoose'), 
    Timeline = require('../models/timeline.server.model'), 
    config = require('../config/config');

var timeline, id;

timeline =  {
  date: "2019", 
  title: "FaceR",
  subtitle: "subtitle", 
  description: "Example Text"
}

describe('Timeline Schema Unit Tests', function() {

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

    it('saves properly when code and name provided', function(done){
      new Timeline({
        date: timeline.date, 
        title: timeline.title
      }).save(function(err, listing){
        should.not.exist(err);
        id = timeline._id;
        done();
      });
    });

    it('saves properly when all 4 properties provided', function(done){
      new Timeline(timeline).save(function(err, listing){
        should.not.exist(err);
        id = timeline._id;
        done();
      });
    });

    it('throws an error when title not provided', function(done){
      new Timeline({
        date: timeline.date
      }).save(function(err){
        should.exist(err);
        done();
      })
    });

    it('throws an error when date not provided', function(done){
      new Timeline({
        title: timeline.title
      }).save(function(err){
        should.exist(err);
        done();
      })
    });

  });

  afterEach(function(done) {
    if(id) {
      Timeline.deleteOne({ _id: id }).exec(function() {
        id = null;
        done();
      });
    } else {
      done();
    }
  });
});