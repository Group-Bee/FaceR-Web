//get all locks from the database
let mongoose = require('mongoose')
Locks = require('../models/locks.server.model.js')

//only need function that will list all locks in the database
exports.list = function (req, res) {
  Locks.find(function (err, all) {
    if (err)
    res.status(400).send(err);
    res.json(all);
  });
};

exports.update = function(req, res) {
  var reqlock = req.locks;

  /* Replace the listings's properties with the new properties found in req.body */
  Locks.update(reqlock, req.body, function(err){
    if(err){
      console.log('error in updating listing occurred')
      res.status(400).send(err);
    }
    lock = new Locks(req.body);
  })

  /* Save the listing */
  lock.save(function(err) {
    if(err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(lock);
    }
  });
};
