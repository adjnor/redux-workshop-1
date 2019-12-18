import React, { Component } from 'react';
import { connect } from 'react-redux';

class ThemeParameters extends Component {
  constructor(props) {
    super(props);
  }
  setColor = evt => {
    this.props.dispatch({ type: 'SET_COLOR', payload: evt.target.value });
  };
  setFontFamily = evt => {
    this.props.dispatch({
      type: 'SET_FONT_FAMILY',
      payload: evt.target.value
    });
  };
  setItalic = evt => {
    this.props.dispatch({
      type: 'SET_FONT_STYLE',
      payload: evt.target.checked ? 'italic' : 'normal'
    });
  };
  setBold = evt => {
    this.props.dispatch({
      type: 'SET_FONT_WEIGHT',
      payload: evt.target.checked ? 'bold' : 'normal'
    });
  };
  render = () => {
    return (
      <div>
        <div>
          {' '}
          Pick your color
          <input onChange={this.setColor} type="color" />
        </div>
        <div>Pick your font</div>
        <div>
          <input
            type="radio"
            name="fontgroup"
            value="arial"
            onChange={this.setFontFamily}
            checked={this.props.fontFamily === 'arial'}
          />{' '}
          Arial
          <input
            type="radio"
            name="fontgroup"
            value="times new roman"
            onChange={this.setFontFamily}
            checked={this.props.fontFamily === 'times new roman'}
          />{' '}
          Times new roman
        </div>
        <div>
          <input type="checkbox" onChange={this.setItalic} /> italic
        </div>
        <div>
          <input type="checkbox" onChange={this.setBold} /> bold
        </div>
      </div>
    );
  };
}

const mapStateToProps = state => ({
  fontFamily: state.fontFamily
});

export default connect(mapStateToProps)(ThemeParameters);
