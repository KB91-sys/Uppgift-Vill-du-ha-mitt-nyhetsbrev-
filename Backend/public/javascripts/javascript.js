var displayUsers = document.getElementById("displayUsers");
var displaySubscribedUsers = document.getElementById("displaySubscribedUsers");


fetch('http://localhost:3000/regUsers')
.then(data => data.json())
.then(function (data){
        
        
    for(i = 0; i < data.length; i++){

        var names = "Name: " + data[i].firstname + " " + data[i].lastname + 
        " Username: " + data[i].username + 
        " E-mail: " + data[i].eMail;

        var newLi = document.createElement('li');
    
        newLi.appendChild(document.createTextNode(names));
    
        displayUsers.appendChild(newLi);

    }                
});


// Fetch subscription users
fetch('http://localhost:3000/getSubscribedUsers')
.then(data => data.json())
.then(function (data){

    for(i = 0; i < data.length; i++){

        var mailAdresses = data[i].eMail;

        var newLi = document.createElement('li')

        newLi.appendChild(document.createTextNode(mailAdresses));
        
        displaySubscribedUsers.appendChild(newLi);
    }
})








