import demo from './demo.js'
import React, { Component } from 'react';
import marked from 'marked';
import './App.css';


class App extends Component {
    constructor() {
      super();
      this.state = {input: demo};
      
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
      this.setState({
        input: e.target.value
      });
    }
  render() {
    console.log(demo);
    let markdown = marked(this.state.input);
    return (
      <div className="container">
        <textarea value={this.state.input} onChange={this.handleChange}></textarea>
        <div className="md" dangerouslySetInnerHTML={{__html: markdown}}></div>
      </div>
    );
  }
}

export default App;
