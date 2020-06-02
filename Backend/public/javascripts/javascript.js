var displayUsers = document.getElementById("displayUsers");



fetch('http://localhost:3000/regUsers')
.then(data => data.json())
.then(function (data){
        
        
    for(i = 0; i < data.length; i++){


        var names = "Name: " + data[i].firstname + " " + data[i].lastname + 
        " Username: " + data[i].username + 
        " E-mail: " + data[i].eMail;


        var newP = document.createElement('li');
    
        newP.appendChild(document.createTextNode(names));
    
        displayUsers.appendChild(newP);

    }                




});


// Fetch subscription users









