import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import Register from './components/Regiser';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginUserPage from './components/LoginUserPage'; 

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { 
      userLoggedIn: false,
      username: ''
    }

    this.getUsername = this.getUsername.bind(this);
  }

  getUsername = (myNewUsername) => {

    this.setState({userLoggedIn: true})
    this.setState({username: myNewUsername});
    console.log("Vi har anropat callback: ", myNewUsername);
  }
 
  render(){
    if(this.state.userLoggedIn === true){
    return(
        <div>

          <LoginUserPage getUsername={this.state.username}/>
          
        </div>
      )
    }

    return (
            
    <BrowserRouter>
      
    <div className="Home">

        <h1>Welcome!</h1>
       
        <Route
          path='/' exact render={ () => {
            return(<LoginForm />);
          }
        }/>
        <Route 
          path='/register' exact render={ () => {
            return(<Register />);
          }
        }/>

        <Route
          path="/login" exact render = { () => {
            return(<LoginForm usernameFromLoginForm={this.getUsername}/>)
            }
          }/>
        
        <Route
          path="/user_logged_in" exact render = { () => {

            return(<LoginUserPage />)
            }
          }/>
          
          
      </div>
      </BrowserRouter>
    
    );
  }
}



export default App;
