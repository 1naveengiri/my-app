import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      counter: 0
    }
  }
  increment = () => {
    this.setState({ 
        counter: this.state.counter+1
    });
  }
  render() {
    return (
      <div>
        <Header/>
        <button onClick={ this.increment }>Increment</button>
        {this.state.counter}
        <Footer/>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Hello World Naveen giri</p>
      </div>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <p>Footer of site</p>
      </div>
    );
  }
}
export default App;
