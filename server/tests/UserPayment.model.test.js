
//Interested in learning more about testing and the libraries used in this file?
//Check out - https://mochajs.org/#hooks - Structure of tests
//Check out - https://mochajs.org/#asynchronous-code - Asyn options


var should = require('should'), 
    mongoose = require('mongoose'), 
    UserPayment = require('../models/UserPayment.server.model'), 
    config = require('../config/config');

var user, id;

user =  {
    name: "John",
    address: "123 st",
    email: "john@gmail.com",
    lockid: "123456789",
    total: 1234
}

describe('User Payment Schema Unit Tests', function() {

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

    it('saves properly when name, address, email, and lockid provided', function(done){
      new UserPayment({
        name: user.name, 
        address: user.address,
        email: user.email,
        lockid: user.lockid
      }).save(function(err, user){
        should.not.exist(err);
        id = user._id;
        done();
      });
    });

    it('saves properly when all 5 properties provided', function(done){
      new UserPayment(user).save(function(err, user){
        should.not.exist(err);
        id = user._id;
        done();
      });
    });

    it('throws an error when address, email, and lockid not provided', function(done){
      new UserPayment({
        name: user.name
      }).save(function(err){
        should.exist(err);
        done();
      })
    });

    it('throws an error when name, email, and lockid not provided', function(done){
        new UserPayment({
          address: user.address
        }).save(function(err){
          should.exist(err);
          done();
        })
    });
    
    it('throws an error when name, address, and lockid not provided', function(done){
        new UserPayment({
          email: user.email
        }).save(function(err){
          should.exist(err);
          done();
        })
    });

    it('throws an error when name, address, and email not provided', function(done){
        new UserPayment({
          lockid: user.lockid
        }).save(function(err){
          should.exist(err);
          done();
        })
    });
  });

  afterEach(function(done) {
    if(id) {
      UserPayment.deleteOne({ _id: id }).exec(function() {
        id = null;
        done();
      });
    } else {
      done();
    }
  });
});