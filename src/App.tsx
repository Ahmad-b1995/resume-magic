import React from "react";
import "./App.css";
import Section1 from "./components/section1/section1";

class App extends React.Component {
  handleClick = (num: number) => {
    console.log(num);
  };
  render() {
    return (
      <div className="App">
        <Section1 handleClick={this.handleClick}></Section1>
      </div>
    )
  }
}

export default App;
