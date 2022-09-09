import React from "react";
import "./assets/styles/App.css";
import Section1 from "./components/section1/section1";
import { Resume } from "./models/resume";
import Section2 from "./components/section2/section2";
import Section3 from "./components/section3/section3";
import Section4 from "./components/section4/section4";
import Section5 from "./components/section5/section5";
import Section6 from "./components/section6/section6";
import pdfService from "./services/pdf.service";

class App extends React.Component {
  resume: Resume;
  pdfServiceInstance: pdfService;

  constructor(props: any) {
    super(props);
    this.resume = new Resume();
    this.pdfServiceInstance = new pdfService(this.resume);
  }

  inputChange = (key: string, value: string) => {
    this.resume[key] = value;
  };

  generatePdf = () => {
    this.pdfServiceInstance.generatePdf()
  };

  render() {
    return (
      <div className="App">
        <Section1 inputChange={this.inputChange}></Section1>
        <Section2 inputChange={this.inputChange}></Section2>
        <Section3 inputChange={this.inputChange}></Section3>
        <Section4 inputChange={this.inputChange}></Section4>
        <Section5 inputChange={this.inputChange}></Section5>
        <Section6 inputChange={this.inputChange}></Section6>
        <button onClick={this.generatePdf}>print</button>
      </div>
    );
  }
}

export default App;
