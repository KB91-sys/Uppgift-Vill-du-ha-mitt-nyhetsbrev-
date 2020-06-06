var express = require('express');
var fs = require('fs');

var router = express.Router();


router.get('/', function (req, res, next) {

    fs.readFile('regUsers.json', (err, data) => {

        var regUsers = JSON.parse(data);

        var findSubscribedUsers = regUsers.filter(x => x.subscription === true);
        
        res.send(findSubscribedUsers);

    })
})

module.exports = router;