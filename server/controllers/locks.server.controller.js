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


exports.read = function(req, res) {
  console.log('reading')
  res.json(req.locks);
};


exports.update = function(req, res) {
  let lock = req.locks
  //update lock to be in/not in cart
  console.log('updating')
  console.log(req.locks, "\nbody\n", req.body)
  console.log('change cart status')
  Locks.update(req.locks, req.body, function(err){
    if(err)
    res.status(400).send(err);
    lock = new Locks(req.body);
  })
  console.log('lock updated')
};

//bind lock object (json in database) to request, pass to update middleware function
exports.locksByID = function(req, res, next, id) {
  console.log('logbyid')
  Locks.findById(id).exec(function(err, lock) {
    if(err) {
      console.log('error in finding lock by id')
      res.status(400).send(err);
    } else {
      req.locks = lock;
      next();
    }
  });
};
