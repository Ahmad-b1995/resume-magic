import React from "react";
import "./App.css";
import Section1 from "./components/section1/section1";
import pdfmake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfmake.vfs = pdfFonts.pdfMake.vfs;

class App extends React.Component {
  data: { [key: string]: string } = {};

  handleClick = (key: string, value: string) => {
    this.data[key] = value;
    this.setState(this.data);
  };

  generatePdf = () => {
    var dd = {
      content: [
        {
          layout: "lightHorizontalLines",
          table: {
            headerRows: 1,
            widths: ["*", "auto", 100, "*"],

            body: [
              [
                { text: this.data.name, bold: true },
                { text: "Second", bold: true },
                { text: "Third", bold: true },
                { text: "The last one", bold: true },
              ],
              ["Value 1", "Value 2", "Value 3", "Value 4"],
              ["Val 2", "Val 2", "Val 3", "Val 4"],
            ],
          },
        },
      ],
    };
    pdfmake.createPdf(dd).download();
  };

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
