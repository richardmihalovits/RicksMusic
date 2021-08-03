import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Blog from './components/Template/Blog';
import Album from './components/Template2/Album';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Blog/> */}
        <Album />
      </div>
    );
  }
}

export default App;
