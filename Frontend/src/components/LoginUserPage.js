import React from 'react';
import './Styling.css';
import axios from 'axios';
import StartPage from './StartPage';
import { Router } from 'react-router-dom';

class LoginUserPage extends React.Component {
        constructor(props){
            super(props)
            
            this.state = {
                username: '',
                subscription: true,
                backToMainMenu: false
            }   
            
            this.getUsername = this.getUsername.bind(this);
            this.onSubscriptionButtonClick = this.onSubscriptionButtonClick.bind(this);
        }   
        
        getUsername = (username) => {       
            this.setState({username: this.props.username});
        }
        
        onSubscriptionButtonClick = event => {
            
            this.setState({subscriptionButtonText: !this.state.subscriptionButtonText});    
            this.setState({subscription: !this.state.subscription});
            
            
            console.log("Innefrån onButtonClick: ")
            console.log(this.props.getUsername);
            
            event.preventDefault();
            
            axios.post('http://localhost:3000/changeSubscription', {username: this.props.getUsername, subscription: this.state.subscription})
            .then(response => {

                console.log(response.data);
            })
            .catch(err => {
                console.log(err);
            })
        }

        backToMainMenu = (event) => {
            this.setState({backToMainMenu: true});
            event.preventDefault();
        }


    render() {        
        
        if(this.state.backToMainMenu === true){
            return (
                <div>
                <Router>
                    <StartPage />
                </Router>
                </div>
            )
        }

        return (
            <div className="LoginUserPage">
                
                <h1>Welcome!</h1>
                <p>Prenumerera på nyhetsbrev: </p>
                <ul>
                <li>
                <button value={this.state.subscriptionButtonText} onClick={this.onSubscriptionButtonClick}>{this.state.subscriptionButtonText ? 'Ja' : 'Nej'}</button>
                </li>
                <li>
                <button onClick={this.backToMainMenu}>Logga ut</button>
                </li>
                </ul>
            </div>
        );
    }
}

export default LoginUserPage;



