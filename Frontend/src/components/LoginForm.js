import React from 'react';
import axios from 'axios';

class LoginForm extends React.Component{

    constructor(props){
        super(props)
        
        this.state = {
            username: '',
            password: ''
        }        
    }
    
    usernameStateHandler = (event) => {
        this.setState({username:event.target.value});
    } 
    passwordStateHandler = (event) => {

        this.setState({password:event.target.value});
    }

    submitHandler = (event) => {

        event.preventDefault();
        
        axios.post('http://localhost:3000/userLogin', this.state)      
        .then(resp => {
            console.log(resp)
        
        
        })
        .catch(error => {
            console.log(error);
        
        
        })        
    
    }
    // POST 
    render() {
        return(
        <div>
            <form onSubmit={this.submitHandler}>
                <label>Logga in</label>
                <div>

                <input type="text" value={this.state.username} onChange={this.usernameStateHandler} />
                <input type="password" value={this.state.password} onChange={this.passwordStateHandler} />
                <input type="submit" value="Login" />

                </div>
            </form>
        </div>
        )
    }
}

export default LoginForm;
