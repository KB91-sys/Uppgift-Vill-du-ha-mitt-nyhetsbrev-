import React from 'react';
import { Link } from 'react-router-dom';

class StartPage extends React.Component{
    



    render(){
        return(
            <div>
                
                <ul>
                <li>
                <Link to="register">Registrera</Link>
                </li>
                <li>
                <Link to="login">Logga in</Link>
                </li>
                </ul>
                

            </div>




        )




    }






}


export default StartPage;