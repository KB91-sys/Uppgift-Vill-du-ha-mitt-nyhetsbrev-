import React from 'react';
import axios from 'axios';

class LoginForm extends React.Component{

    constructor(props){
        super(props)
        
        this.state = {
            username: '',
            password: '',
            response: ''

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
        
        // POST 
        axios.post('http://localhost:3000/userLogin', this.state)      
        .then(resp => {
            console.log(resp)
            
            const response = resp.data;

            this.setState({ response })
            
        })
        .catch(error => {
            console.log(error);
        
        
        })        
    
    }
    render() {
        return(
        <div>
            <form onSubmit={this.submitHandler}>
                <label>Logga in</label>
                <div>
                <p>{this.state.response}</p>
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