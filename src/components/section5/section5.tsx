import { Component } from "react";
import "./section5.css";

export default class Section5 extends Component<any> {
  render() {
    return (
      <div className="section3">
        <div className="technical-skills-container block dark-block primary-title">
          TECHNICAL SKILLS
        </div>
        <div className="block">
          <table className="technical-skills-table">
            <tbody>
              <tr>
                <td>SCRIPTING / MODELING LANGUAGES</td>
                <td>ES5+, TypeScript, CSS</td>
              </tr>
              <tr>
                <td>FRAMEWORKS & LIBRARIES</td>
                <td>Angular (senior), Vue.js (junior), React (student)</td>
              </tr>
              <tr>
                <td>OTHER TECHNOLOGIES</td>
                <td>Git, Unit Testing, Sass, Linux, Angular Universal</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
