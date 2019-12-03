//get all locks from the database
TimelineData = require('../Schemas/timelineSchema')

exports.list = function (req, res) {
  TimelineData.find(function (err, all) {
    if (err)
      res.status(400).send(err);
    res.json(all);
  });
};
