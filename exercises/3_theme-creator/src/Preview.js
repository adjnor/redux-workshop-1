import React, { Component } from 'react';
import { connect } from 'react-redux';

class Preview extends Component {
  render = () => {
    let myStyle = {
      height: '100vh',
      width: '50vh',
      padding: '30px',
      fontStyle: this.props.fontStyle,
      fontFamily: this.props.fontFamily,
      fontWeight: this.props.fontWeight,
      color: this.props.color
    };
    return <div style={myStyle}>{this.props.text}</div>;
  };
}

const mapStateToProps = state => ({
  fontStyle: state.fontStyle,
  fontFamily: state.fontFamily,
  fontWeight: state.fontWeight,
  color: state.color,
  text: state.text
});

export default connect(mapStateToProps)(Preview);
