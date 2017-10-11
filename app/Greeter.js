import hi from './data.json'
import React, {Component} from 'react';

class Greeter extends Component{
  render() {
    return (
      <div>
        {hi.text}
      </div>
    );
  }
}

export default Greeter;
