import React from "react";
import "./assets/styles/App.css";
import Section1 from "./components/section1/section1";
import { Resume } from "./models/resume";
import pdfMake from "pdfmake/build/pdfmake";
import { vfs } from "./assets/fonts/vfs_fonts.js";
// import * as pdfFonts from "./assets/fonts/vfs_fonts";
// pdfMake.vfs = pdfFonts.pdfMake.vfs;
// import { useEffect, useRef, useState } from "react";
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
        <button onClick={this.generatePdf}>print</button>
      </div>
    );
  }
}

export default App;
