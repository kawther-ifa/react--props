import React, { Component } from 'react';
class HandleName extends Component {
  handleEvent = () => {
  // alert(`${name}`);
  };
  
    render() {
      return (
        <button onClick={this.handleEvent}>Click onClick me</button>
      );
    }
  }
  
  export default HandleName;