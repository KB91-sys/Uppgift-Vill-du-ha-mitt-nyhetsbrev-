import React from 'react';


class FetchUser extends React.Component{    
    
    componentDidMount() {

        const url = 'http://localhost:3000/regUsers';
        
        fetch(url)
            .then(function (response){
                return response.json();

            })
            .then(function (responseJson){

                console.log(responseJson);


            });
    }
    
    render() {



        return (

            <div>


            </div>


        )



    }


}

export default FetchUser;


