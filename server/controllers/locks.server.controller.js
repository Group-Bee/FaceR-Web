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
