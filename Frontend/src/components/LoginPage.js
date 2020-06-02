import React from 'react';


class LoginPage extends React.Component {
    constructor(props){
        super(props) 
            this.state = {

                

            }
        }

        render() { 
        const userName = this.props.userName;
        
        return (

            <div>
            
                Welcome {userName}

            </div>

        );
        
    }

}

export default LoginPage;



