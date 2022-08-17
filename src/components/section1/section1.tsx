import React, { Component } from "react";
import "./section1.css";

interface IState {
  name?: string;
  lastName?: string;
}

export default class Section1 extends Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: "Name",
      lastName: "LastName",
    };
  }

  emit(e: any) {
    this.setState({ name: "kjkj" });
  }

  render() {
    return (
      <div>
        <div className="info-container">
          <input
            type="text"
            className="name"
            onChange={(e) => this.props.handleClick(100)}
            placeholder={`${this.state.name} ${this.state.lastName}`}
          />
          <ul className="socialmedia-list">
            <li>
              <i className="fa fa-home"></i>
              Tehran, Iran
            </li>
            <li>
              <i className="fa fa-globe"></i>
              <a href="https://AhmadCodes.com">https://AhmadCodes.com</a>
            </li>
            <li>
              <i className="fa-brands fa-linkedin-in"></i>
              <a href="https://www.linkedin.com/in/ahmad-baghereslami-625ab711b">
                https://www.linkedin.com/in/ahmad-baghereslami-625ab711b
              </a>
            </li>
            <li>
              <i className="fa-brands fa-github"></i>
              <a href="https://github.com/Ahmad-b1995">
                https://github.com/Ahmad-b1995
              </a>
            </li>
            <li>
              <i className="fa-brands fa-youtube"></i>
              <a href="https://www.youtube.com/channel/UChCFeeyBW31iEuyCXyCgfhQ/">
                https://www.youtube.com/channel/UChCFeeyBW31iEuyCXyCgfhQ/
              </a>
            </li>
            <li>
              <i className="fa fa-envelope"></i>
              <a href="mailto:ahmad.b1995@gmail.com">ahmad.b1995@gmail.com</a>
            </li>
            <li>
              <i className="fa fa-phone"></i>
              <a href="tel:+989129274652">+989129274652</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
