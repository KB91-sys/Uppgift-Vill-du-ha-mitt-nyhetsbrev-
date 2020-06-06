var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true});

var router = express.Router();

router.post('/', urlencodedParser, function (req, res)
{
    
    fs.readFile('regUsers.json', (err, data) => {

        if(err) throw err;

        let jsonData = JSON.parse(data);

        let username = req.body.username;
        let password = req.body.password;

        let userNameArray = jsonData.filter(a => a.username === username);
        
        let checkPassword = userNameArray.find(a => a.password === password);
        
        if(userNameArray && checkPassword){

            res.send(userNameArray);

        }
        else if(!checkPassword){

            res.send("Fel lösenord eller användarnamn.");
            
        }
    })
})




module.exports = router;