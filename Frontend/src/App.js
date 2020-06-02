import React, { Component } from 'react';
import './App.css';
import LoginForm from './components/LoginForm'
import Register from './components/Regiser';
import StartPage from './components/StartPage'
import { BrowserRouter, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { showText: 'Welcome guest!' }
  }


  //Denna ska ligga under 'return' <WelcomeMessage showText={this.state.showText} />
  
  render(){
    
    return (
      <BrowserRouter>
      <div>
        
        <StartPage />  
        
    
        
        <Route 
          path='/register' exact render={ () => {
            return(<Register />);

          }
        }/>

        <Route
          path="/login" exact render = { () => {
            return(<LoginForm />)

            }
          }/>


      </div>
      </BrowserRouter>
    );
  }
}



export default App;
