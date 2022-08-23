import React from "react";
import "./assets/styles/App.css";
import Section1 from "./components/section1/section1";
import { Resume } from "./models/resume";
import pdfMake from "pdfmake/build/pdfmake";
import { vfs } from "./assets/fonts/vfs_fonts.js";
import Section2 from './components/section2/section2';
import Section3 from './components/section3/section3';
import Section4 from './components/section4/section4';
import Section5 from './components/section5/section5';
import Section6 from './components/section6/section6';
pdfMake.vfs = vfs;

class App extends React.Component {
  resume: Resume;

  constructor(props: any) {
    super(props);
    this.resume = new Resume();
    pdfMake.fonts = {
      Roboto: {
        normal: "Roboto-Regular.ttf",
        bold: "Roboto-Medium.ttf",
        italics: "Roboto-Italic.ttf",
        bolditalics: "Roboto-MediumItalic.ttf",
      },
      Fa: {
        normal: "fa.ttf",
      },
    };
  }

  handleClick = (key: string, value: string) => {
    this.resume[key] = value;
    // this.setState(this.data);
  };

  generatePdf = () => {
    const documentDefinition = this.getDocumentDefinition();
    pdfMake.createPdf(documentDefinition).open();
  };

  getDocumentDefinition(): any {
    return {
      content: [
        {
          columns: [
            [
              {
                text: this.resume.name,
                style: "name",
              },
              {
                text: [
                  { text: "\ue800", style: "icon" },
                  "  ",
                  this.resume.country,
                ],
                style: "info",
              },
              {
                text: [
                  { text: "\ue801", style: "icon" },
                  "  ",
                  this.resume.website,
                ],
                style: "info",
              },
              {
                text: [
                  { text: "\uf0e1", style: "icon" },
                  "  ",
                  this.resume.linkedIn,
                ],
                style: "info",
              },
              {
                text: [
                  { text: "\uf09b", style: "icon" },
                  "  ",
                  this.resume.github,
                ],
                style: "info",
              },
              {
                text: [
                  { text: "\uf0e0", style: "icon" },
                  "  ",
                  this.resume.email,
                ],
                style: "info",
              },
              {
                text: [
                  { text: "\ue803", style: "icon" },
                  "  ",
                  this.resume.phoneNumber,
                ],
                style: "info",
              },
            ],
          ],
        },
      ],
      pageMargins: 25,
      styles: {
        name: {
          fontSize: 14,
          bold: true,
          color: "#3b4147",
          marginBottom: 15,
        },
        info: {
          fontSize: 11,
          color: "#5b6e80",
          marginBottom: 10,
        },
        icon: {
          font: "Fa",
          color: "#5b6e80",
          fontSize: 11,
        },
      },
    };
  }

  render() {
    return (
      <div className="App">
        <Section1 handleClick={this.handleClick}></Section1>
        <Section2 handleClick={this.handleClick}></Section2>
        <Section3 handleClick={this.handleClick}></Section3>
        <Section4 handleClick={this.handleClick}></Section4>
        <Section5 handleClick={this.handleClick}></Section5>
        <Section6 handleClick={this.handleClick}></Section6>
        <button onClick={this.generatePdf}>print</button>
      </div>
    );
  }
}

export default App;
