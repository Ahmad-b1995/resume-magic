import { Component } from "react";
import "./section4.css";

export default class Section4 extends Component<any> {
  render() {
    return (
      <div className="section4">
        <div className="professional-experience-title block dark-block primary-title">
          PROFESSIONAL EXPERIENCE
        </div>
        <div className="professional-experience-container">
          <div className="job-main-container">
            <div className="job-title-job-info-container">
              <h1 className="job-title">FRONT-END DEVELOPER</h1>
              <div className="job-info">
                Hamisheh + Tehran, Fereshteh district + Sep 2021 - Present
              </div>
            </div>
            <ul className="job-info-list">
              <li>
                Consulted exceptionally and with extensive research on the
                design and UX of the front-end apps
              </li>
              <li>
                Programmed the web application using Angular with great
                precision and research before each phase of development
              </li>
              <li>Research constantly to refactor and better the web app</li>
              <li>
                Collaborated with the back-end developer for system organization
              </li>
            </ul>
          </div>
          <div className="job-main-container">
            <div className="job-title-job-info-container">
              <h1 className="job-title">FULL-STACK DEVELOPER</h1>
              <div className="job-info">
                TivanCar + Karaj + Sep 2020 - Sep 2021
              </div>
            </div>
            <ul className="job-info-list">
              <li>
                Helped with the creation of both the front-end and the backend
                of the app using Vue.js and nodejs
              </li>
              <li>
                Supported them with hiring the right staff based on the job
                requirements
              </li>
              <li>
                helped with the integration of accounting and stock management
                with the created system
              </li>
            </ul>
          </div>
          <div className="job-main-container">
            <div className="job-title-job-info-container">
              <h1 className="job-title">FULL-STACK DEVELOPER</h1>
              <div className="job-info">
                GamAlef + Tehran - Piroozi district + Sep 2019 - Sep 2020
              </div>
            </div>
            <ul className="job-info-list">
              <li>
                Developed e-commerce front-end using Vue.js and backend using
                nodejs
              </li>
              <li>planned out database using MongoDb</li>
              <li>consulted for the overall UI & UX of the web application</li>
              <li>helped with connecting the android app to the backend</li>
              <li>helped the admin with the maintenance of the backend app</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
