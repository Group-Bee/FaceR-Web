
let mongoose = require('mongoose')
UserPayment = require('../models/UserPayment.server.model.js')


exports.list = function (req, res) {
  UserPayment.find(function (err, all) {
    if (err)
    res.status(400).send(err);
    res.json(all);
  });
};

exports.update = function(req, res) {

  console.log('create request for user', req.body)
  var userpayment = new UserPayment(req.body);

  /* Then save the testimonial */
  userpayment.save(function(err) {
    if(err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(userpayment);
    }
  });
};
