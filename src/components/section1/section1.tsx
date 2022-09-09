import { Component } from "react";
import "./section1.css";

export default class Section1 extends Component<any> {
  render() {
    return (
      <div>
        <div className="info-container">
          <input
            type="text"
            className="name"
            placeholder="Name Lastname"
            onChange={(e) => this.props.inputChange("name", e.target.value)}
          />
          <ul className="socialmedia-list">
            <li>
              <i className="fa fa-home"></i>
              <input
                type="text"
                placeholder="country, state"
                onChange={(e) =>
                  this.props.inputChange("country", e.target.value)
                }
              />
            </li>
            <li>
              <i className="fa fa-globe"></i>
              <input
                type="text"
                placeholder="website.com"
                onChange={(e) =>
                  this.props.inputChange("website", e.target.value)
                }
              />
            </li>
            <li>
              <i className="fa-brands fa-linkedin-in"></i>
              <input
                type="text"
                placeholder="LinkedIn"
                onChange={(e) =>
                  this.props.inputChange("linkedIn", e.target.value)
                }
              />
            </li>
            <li>
              <i className="fa-brands fa-github"></i>
              <input
                type="text"
                placeholder="github"
                onChange={(e) =>
                  this.props.inputChange("github", e.target.value)
                }
              />
            </li>
            <li>
              <i className="fa fa-envelope"></i>
              <input
                type="text"
                placeholder="email"
                onChange={(e) =>
                  this.props.inputChange("email", e.target.value)
                }
              />
            </li>
            <li>
              <i className="fa fa-phone"></i>
              <input
                type="text"
                placeholder="phoneNumber"
                onChange={(e) =>
                  this.props.inputChange("phoneNumber", e.target.value)
                }
              />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
