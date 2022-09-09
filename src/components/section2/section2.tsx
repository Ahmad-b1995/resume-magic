import { Component } from "react";
import "./section2.css";

export default class Section2 extends Component<any> {
  render() {
    return (
      <div className="section2">
        <div className="job-title-container block">
          <input
            className="main-job-title primary-title"
            type="text"
            placeholder="JOB TITLE"
            onChange={(e) => this.props.inputChange("jobTitle", e.target.value)}
          ></input>
          <input
            className="job-description hidden-input"
            type="text"
            placeholder="Front-End Development"
            onChange={(e) =>
              this.props.inputChange("SecondaryJobTitle", e.target.value)
            }
          ></input>
        </div>
        <textarea
          className="about-me-container hidden-input"
          placeholder="5+ years of experience in web development using Angular, Vue.js,
            and Javascript to deliver front-end solutions. I have experience
            in solution delivery in a very limited time frame. Daily study and
            research for a cleaner code and shorter development time is a
            never-ending endeavor for me. I have always been an excellent
            collaborative team player and an outstanding communicator"
          rows={4}
          onChange={(e) => this.props.inputChange("aboutMe", e.target.value)}
        ></textarea>
      </div>
    );
  }
}
