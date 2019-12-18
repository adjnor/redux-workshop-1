import React, { Component } from 'react';
import './App.css';
import Preview from './Preview.js';
import ThemeParameters from './ThemeParameters.js';
import GenerateText from './GenerateText.js';

class App extends Component {
  render = () => {
    return (
      <div style={{ display: 'flex' }}>
        <GenerateText />
        <Preview />
        <ThemeParameters />
      </div>
    );
  };
}

export default App;
