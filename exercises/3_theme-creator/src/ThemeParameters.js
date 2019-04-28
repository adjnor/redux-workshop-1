import React, { Component } from 'react';
import './App.css';


class ThemeParameters extends Component {
  constructor(props) {
    super(props)
    this.color = this.color.bind(this)
    this.arial = this.arial.bind(this)
    this.timesNewRoman = this.timesNewRoman.bind(this)
    this.italic = this.italic.bind(this)
  }
  color(evt) { }
  arial = () => { }
  timesNewRoman= () => { }
  italic(evt) { }
  render= () => {
    return (
      <div>
        <div> Pick your color
          <input onChange={this.color} type="color" />
        </div>
        <div>Pick your font</div>
        <div>
          <input type="radio" name="fontgroup" value="arial" onChange={this.arial} /> Arial
          <input type="radio" name="fontgroup" value="times new roman" onChange={this.timesNewRoman} /> Times new roman
        </div>
        <div>
          <input type="checkbox" onChange={this.italic} /> italic
        </div>
      </div>
    );
  }
}

export default ThemeParameters;
