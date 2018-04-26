import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import './App.less';
import { Button } from 'antd-mobile';
import { Link } from 'react-router-dom';

import { getProjectStatusAtGlobal } from '../services/api';

class App extends Component {

  

  render() {
    console.log('this is app.jsx')
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div className="App-box">
          <Link className="button-item" to="/home">
            <Button type="primary">demo</Button>
          </Link>
          <Link className="button-item" to="/me">
            <Button type="primary">me</Button>
          </Link>
          <Link className="button-item" to="/fr">
            <Button type="primary">fr</Button>
          </Link>
  
        </div>
      </div>
    );
  }
}

export default App;
