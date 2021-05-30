import React,  { Component } from 'react';
import Routers from '@/router';

class App extends Component {
  state = {
    title: ''
  }
  setTitle = ({ title }) => {
    if(this.state.title === title) return;
    // this.setState({ title });
  }
  render() {
    return(
      <div className="App">
        <Routers onRouterChange={this.setTitle}></Routers>
      </div>
    );
  }
}

export default App;
