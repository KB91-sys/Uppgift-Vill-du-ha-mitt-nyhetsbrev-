import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import StartPage from './StartPage';

class LoginForm extends React.Component{
    
    constructor(props){
        super(props)
        
        this.state = {
            username: '',
            password: '',   
            message: '',         
        }        
        
        this.submitHandler = this.submitHandler.bind(this);
    }

    usernameStateHandler = (event) => {
        this.setState({username:event.target.value});
    } 
    passwordStateHandler = (event) => {
        
        this.setState({password:event.target.value});
    }

    authoration = () => {    
        return <Redirect to='LoginUserPage'/>
    }  

    submitHandler = (event) => {         
        
        event.preventDefault();
        
        axios.post('http://localhost:3000/userLogin', this.state)
        .then( response => {
            console.log(response.data)
            
            
            if(response.data === "Fel lösenord eller användarnamn."){
                
                this.setState({message: "Fel lösenord eller användarnamn"});
                
            }
            else{
                
                this.setState({ auth: true });
                
                this.setState({     
                    
                    backToParent: true,
                        
                    username: response.data[0].username,
           
                })
                
                this.props.usernameFromLoginForm(this.state.username);
            
            }
        })
        .catch(error => {
            console.log(error);
        })
                    
    }
               
    render() {
        
        if(this.state.backToParent === true){
            return(
                <div>
                    <StartPage />
                </div>
            )
        }
        
        return(
            <div className="loginForm">
            <form onSubmit={this.submitHandler}>
                <StartPage />
                <label>Logga in</label>
                <div>{this.state.message}</div>
                <div>                    
                    <input type="text" value={this.state.username} placeholder="Användarnamn..." onChange={this.usernameStateHandler} />
                    <input type="password" value={this.state.password} placeholder="Lösenord..." onChange={this.passwordStateHandler} />
                    <input type="submit" value="Login" />
                </div>
            
            </form>
        </div>
        )
    }  
}

export default LoginForm;