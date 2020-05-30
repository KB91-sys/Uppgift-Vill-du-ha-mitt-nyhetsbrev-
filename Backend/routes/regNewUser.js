var express = require('express');
var fs = require('fs');
var cors = require('cors'); 
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true});

use.router(cors());
var router = express.Router();


// GET 

//router.get('/')

    // Förnamn
    // Efternamn
    // email
    // Preminumation



// POST new user

router.post('/', urlencodedParser, function (req, res, next) {
      
    fs.readFile('regUsers.json', (err, data) => {
  
      if(err) throw err;
  
        var regUsers = JSON.parse(data);
    


        var newUser = {
          
          "firstName":  req.body.firstName,
          "lastName": req.body.lastName,
          "userName": req.body.userName,
          "eMail": req.body.eMail,          
          "password": req.body.password  
        
        };
          
        if(req.body.firstName && req.body.lastName && req.body.userName && req.body.eMail && req.body.password)
        {
          
          regUsers.push(newUser);
          var saveUser = JSON.stringify(regUsers);
      
              
          fs.writeFile('regUsers.json', saveUser, (err, data) => {
            
            if(err) throw err;
            

            res.send("Användare sparad.")
      
  
          })
          
        }  
        else{

          res.send("Alla fält är inte ifyllda.")

        }

    
      
    })
  
   
  
  
  
  })
  
  
  
  

module.exports = router;
