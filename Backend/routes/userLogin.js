var express = require('express');
var fs = require('fs');


var router = express.Router();


router.post('/userLogin', function (err, res)
{

    fs.readFile('regUsers.json', (err, data) => {

        if(err) throw err;

        var regUsers = JSON.parse(data);


        regUsers.


    })






})




module.exports = router;