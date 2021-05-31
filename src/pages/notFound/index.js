import React, { Component } from 'react';

class NotFound extends Component{
  state = {
    animated: ''
  }
  enter = () => {
    this.setState({animated: 'hinge'})
  }
  render(){
    return(
      <div className="center">
        404
      </div>
    )
  }
}

export default NotFound;