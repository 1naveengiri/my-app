import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class FirstComponent extends React.Component {
  render() {
    return (
      <div className="FirstComponent">
        <p className="App-intro"> This is My First React Component {this.props.name}</p>
      </div>
    );
  }
}
function Test(){
  return <h1>Testing is Good</h1>;
}
ReactDOM.render(<Test/>, document.getElementById('content2'));

function test_function(){
  const element = ( <div>Testing here</div>);
  ReactDOM.render(element, document.getElementById('test_func'));
  
}

export default FirstComponent;
