import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import weatherForm from './components/weatherForm.component';

class App extends Component {

  

  render() {
    return (
      <Router>
        <div className="container">
          <Route path="/" exact component={weatherForm} />
        </div>
      </Router>
    );
  }
}

export default App;
