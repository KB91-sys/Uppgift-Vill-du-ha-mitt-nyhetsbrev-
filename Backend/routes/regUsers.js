var express = require('express');
var fs = require('fs');

var router = express.Router();

// GET users
router.get('/', function(req, res, next) {

  fs.readFile('regUsers.json', (err, data) => {

    if(err) 
      throw err;

    var users = JSON.parse(data);
    res.send(users);

  })

});

module.exports = router;
