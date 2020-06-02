import React from 'react';
import axios from 'axios';

class Register extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            
            firstname: '',
            lastname: '',
            username: '',
            eMail: '',          
            password: '',      
            response: ''
        }

    }

    firstnameStatehandler = (event) => {
        this.setState({firstname:event.target.value});
    }
    lastnameStatehandler = (event) => {
        this.setState({lastname:event.target.value});
    }
    usernameStatehandler = (event) => {
        this.setState({username:event.target.value});
    }
    emailStatehandler = (event) => {
        this.setState({eMail:event.target.value});
    }
    passwordStatehandler = (event) => {
        this.setState({password:event.target.value});
    }

    submitHandler = (event) => {

        event.preventDefault();

        axios.post('http://localhost:3000/regnewuser', this.state)
            .then(resp => {

                console.log(resp)               
                
                const response = resp.data;
                this.setState({ response })

            })
            .catch(err => {

                console.log(err);


            })
              
        

    }


    render() {
        
       
        return(


            <div>
                <form onSubmit={this.submitHandler}>
                    <label>Registrera ny användare</label>
                        
                        <div>{this.state.response}</div>
                        
                        <input type="text" value={this.state.firstname} placeholder="Förnamn" onChange={this.firstnameStatehandler}/>
                        <input type="text" value={this.state.lastname} placeholder="Efternamn" onChange={this.lastnameStatehandler}/>
                        <input type="text" value={this.state.username} placeholder="Användarnamn" onChange={this.usernameStatehandler}/>
                        <input type="text" value={this.state.eMail} placeholder="E-mailadress" onChange={this.emailStatehandler}/>
                        <input type="text" value={this.state.password} placeholder="Lösenord" onChange={this.passwordStatehandler}/>
                        <input type="submit" value="register"/>
                
                </form>
            </div>


        ) 
    }




}



export default Register;
