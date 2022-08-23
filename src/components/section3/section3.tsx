import { Component } from "react";
import "./section3.css";

export default class Section3 extends Component<any> {
  render() {
    return (
      <div className="section3">
        <div className="core-competencies-title dark-block primary-title block">
          CORE COMPETENCIES
        </div>
        <div className="core-competencies-list">
          <input
            className="hidden-input"
            type="text"
            placeholder="JOB TITLE"
            onChange={(e) => this.props.handleClick("jobTitle", e.target.value)}
          ></input>
          <input
            className="hidden-input"
            type="text"
            placeholder="JOB TITLE"
            onChange={(e) => this.props.handleClick("jobTitle", e.target.value)}
          ></input>
          <input
            className="hidden-input"
            type="text"
            placeholder="JOB TITLE"
            onChange={(e) => this.props.handleClick("jobTitle", e.target.value)}
          ></input>
          <input
            className="hidden-input"
            type="text"
            placeholder="JOB TITLE"
            onChange={(e) => this.props.handleClick("jobTitle", e.target.value)}
          ></input>
          <input
            className="hidden-input"
            type="text"
            placeholder="JOB TITLE"
            onChange={(e) => this.props.handleClick("jobTitle", e.target.value)}
          ></input>
          <input
            className="hidden-input"
            type="text"
            placeholder="JOB TITLE"
            onChange={(e) => this.props.handleClick("jobTitle", e.target.value)}
          ></input>
        </div>
      </div>
    );
  }
}
