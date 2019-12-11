let mongoose = require('mongoose')
Locks = require('../models/locks.server.model.js')

//this function will get all the locks from the database and will attach the json containing the information to the response object in the data field
exports.list = function (req, res) {
  Locks.find(function (err, all) {
    if (err)
    res.status(400).send(err);
    res.json(all);
  });
};

//this function will attach the appropriate lock (bound to the request object as 'locks' in locksByID) to the response object in the data field
//this request object will be altered by locksByID before reaching this function
exports.read = function(req, res) {
  //DEBUG
  console.log('reading')
  res.json(req.locks);
};

//this function updates the lock model of the appropriate lock (again, being bound to the request object as 'locks' in locksByID)
//the body of the request object will be given by the axios request and will include the field to be changed ('incart')
exports.update = function(req, res) {
  let lock = req.locks
  //DEBUG
  console.log('updating')
  console.log(req.locks, "\nbody\n", req.body)
  //DEBUG
  console.log('change cart status')
  //update lock to be in/not in cart
  Locks.update(req.locks, req.body, function(err){
    if(err)
    res.status(400).send(err);
    lock = new Locks(req.body);
  })
  //DEBUG
  console.log('lock updated')
};

//bind lock object (json in database) to request, pass to next middleware function
exports.locksByID = function(req, res, next, id) {
  //DEBUG
  console.log('logbyid')
  Locks.findById(id).exec(function(err, lock) {
    if(err) {
      //DEBUG/error handlng
      console.log('error in finding lock by id')
      res.status(400).send(err);
    } else {
      req.locks = lock;
      next();
    }
  });
};
