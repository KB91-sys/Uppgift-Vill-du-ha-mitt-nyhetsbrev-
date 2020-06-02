import React from 'react';

class Register extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            
            firstname: '',
            lastname: '',
            username: '',
            eMail: '',          
            password: ''          
        }

    }




    render() {
        return(

            
            <div>
                <form>
                    <label>Registrera ny användare</label>
                        <input type="text" value={this.state.firstname} placeholder="Förnamn" />
                        <input type="text" value={this.state.lastname} placeholder="Efternamn"/>
                        <input type="text" value={this.state.username} placeholder="Användarnamn"/>
                        <input type="text" value={this.state.eMail} placeholder="E-mailadress"/>
                        <input type="text" value={this.state.password} placeholder="Lösenord"/>

                </form>
            </div>


        ) 
    }




}



export default Register;
