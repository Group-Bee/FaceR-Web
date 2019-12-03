const axios = require('axios');
var fs = require("fs");

axios.get('/About/Timeline')
  .then(function (response) {
    // handle success
    console.log(response);
    fs.writeFile( "timelineData.json", JSON.stringify( response ), "utf8", (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });