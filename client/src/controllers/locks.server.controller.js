//get all locks from the database
Locks = require('../LockSchema')

exports.list = function (req, res) {
  Locks.find(function (err, all) {
    if (err)
      res.status(400).send(err);
    res.json(all);
  });
};