import React, { Component } from 'react';
import { connect } from 'react-redux';
import faker from 'faker';

class GenerateText extends Component {
  handleClick = () => {
    let randomString = '';
    for (let i = 0; i < 10; i++) {
      randomString += faker.random.words() + ' ';
    }
    this.props.dispatch({ type: 'SET_TEXT', payload: randomString });
  };
  render = () => {
    return <button onClick={this.handleClick}>Generate text</button>;
  };
}

export default connect()(GenerateText);
