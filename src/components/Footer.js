import React from "react";
import resume from "../assets/Fullchee_Zhang_CV.pdf";

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div className="resume">
          <a className="resume__button" href={resume}>
            Resume
          </a>
        </div>
        <div className="inner">
          <ul className="icons">
            <li>
              <a
                href="https://www.github.com/Fullchee"
                className="icon fa-github"
              >
                <span className="label">Github</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/fullchee-zhang/"
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:fullchee@gmail.com"
                className="icon fa-envelope-o"
              >
                <span className="label">Email</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
