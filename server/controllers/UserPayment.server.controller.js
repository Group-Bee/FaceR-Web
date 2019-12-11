let mongoose = require('mongoose')
UserPayment = require('../models/UserPayment.server.model.js')

//update the userPaymentInfo collection on correct submission of form in 'Confirm Payment' page
exports.update = function(req, res) {
  //DEBUG
  console.log('create request for user', req.body)
  //create and save new entry in collection
  var userpayment = new UserPayment(req.body)
  userpayment.save(function(err) {
    if(err) {
      //error handling
      console.log(err);
      res.status(400).send(err);
    } else {
      //attach new model to response object (can be found in data field)
      res.json(userpayment);
    }
  });
};
