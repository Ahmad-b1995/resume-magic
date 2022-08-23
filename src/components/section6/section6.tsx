import { Component } from "react";
import "./section6.css";

export default class Section6 extends Component<any> {
  render() {
    return (
      <div className="section6">
        <div className="additional-credentials-container block dark-block primary-title">
          ADDITIONAL CREDENTIALS
        </div>
        <div className="block">
          <table className="credentials-table">
            <tbody>
              <tr>
                <td>CERTIFICATIONS</td>
                <td>
                  <ul className="credentials-unordered-list">
                    <li>
                      Angular: Ecosystems | LinkedIn | Apr 2022 <br />
                      ID: AU6LaYxGkhDaqzQdTL9m2 4CthbVx
                    </li>
                    <li>
                      Learning Angular | LinkedIn | Mar 2022 <br />
                      ID: AYUUH62u4WAlFIdwyRxQ wLIuCv-e
                    </li>
                    <li>
                      Angular Essential Training | LinkedIn | Feb 2022 <br />
                      ID: AZ‑0milb5_tNgp0d5XENpdJ a5o70
                    </li>
                    <li>
                      Angular: Building large applications | LinkedIn | Feb 2022
                      <br />
                      ID: AfCOscBtwRa0JsGNllc6y7N XC7kH
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
