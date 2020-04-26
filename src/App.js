import React, {Component} from 'react';
import './App.css';
import PizzaContainer from './Components/pizzaContainer';
import Header from './Components/header';

class App extends Component{
  render(){
    return (
      <div className = "App">
        <Header />
        <PizzaContainer/>
      </div>
    );
  }
}

export default App;
