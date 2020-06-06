var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true});

var router = express.Router();

router.post('/', urlencodedParser, function (req, res, next) {

    fs.readFile('regUsers.json', (err, data) => {

        if(err) throw err;
        
        const username = req.body.username;
        const changesubscription = req.body.subscription;
        var regUsers = JSON.parse(data);

        for(let i = 0; i < regUsers.length; i++){
                if(regUsers[i].username === username){

                regUsers[i].subscription = changesubscription;
            }            
        }
        
        //regUsers.push(newUser);
        var saveEdit = JSON.stringify(regUsers, 0, 2);
    
            
        fs.writeFile('regUsers.json', saveEdit, (err, data) => {
        
            if(err) throw err;
            
            res.send("Användare sparad.");
        })

        res.send(regUsers);
    }) 
})

module.exports = router;