import React, { Component } from 'react';
import './App.css';
import LoginForm from './components/LoginForm'
import Register from './components/Regiser';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { showText: 'Welcome guest!' }
  }


  //Denna ska ligga under 'return' <WelcomeMessage showText={this.state.showText} />
  
  render(){
    
    return (
      <div className="App">

        <Register />

      </div>

    );
  }
}



export default App;
