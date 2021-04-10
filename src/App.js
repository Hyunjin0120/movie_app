import React from "react";
import PropTypes from 'prop-types';

class App extends React.Component {
  
  state = {
    isLoading: true
  }
  
  add = () => {
    this.setState(current=>({count: current.count+1}));
  }

  minus = () => {
    this.setState(current=>({count: current.count-1}));
  }

  render(){
    console.log("Rendering");
    const {isLoading} = this.state.isLoading;
    return (
      <div>{isLoading ? "Loading...":"We are ready"}</div>
      )
    ;
  }

  componentDidMount(){
    console.log("DidMount");
    this.setState(current => ({isLoading: false}));
  }
}

export default App;
