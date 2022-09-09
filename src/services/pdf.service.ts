import { Resume } from "../models/resume";
import pdfMake from "pdfmake/build/pdfmake";
import { vfs } from "../assets/fonts/vfs_fonts.js";
pdfMake.vfs = vfs;

export default class pdfService {
  resume: Resume;

  constructor(resume: Resume) {
    this.resume = resume;
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
        {
          style: "section",
          table: {
            widths: ["100%"],
            body: [
              [
                {
                  text: "first column",
                  fillColor: "#555555",
                  color: "#00FFFF",
                },
              ],
            ],
          },
          layout: "noBorders",
        },
        {
          style: "section",
          table: {
            widths: ["100%"],
            body: [
              [
                {
                  text: "first column",
                  fillColor: "#555555",
                  color: "#00FFFF",
                },
              ],
            ],
          },
          layout: "noBorders",
        },
        {
          style: "section",
          table: {
            widths: ["100%"],
            body: [
              [
                {
                  text: "first column",
                  fillColor: "#555555",
                  color: "#00FFFF",
                },
              ],
            ],
          },
          layout: "noBorders",
        },
        {
          style: "section",
          table: {
            widths: ["100%"],
            body: [
              [
                {
                  text: "first column",
                  fillColor: "#555555",
                  color: "#00FFFF",
                },
              ],
            ],
          },
          layout: "noBorders",
        },
        {
          style: "section",
          table: {
            widths: ["100%"],
            body: [
              [
                {
                  text: "first column",
                  fillColor: "#555555",
                  color: "#00FFFF",
                },
              ],
            ],
          },
          layout: "noBorders",
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
        section: {
          color: "#FFFFFF",
          fillColor: "#2361AE",
          alignment: "center",
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
}
