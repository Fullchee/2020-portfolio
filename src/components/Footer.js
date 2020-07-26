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
                aria-label="Check out my GitHub"
                href="https://www.github.com/Fullchee"
                className="icon fa-github"
              >
                <span className="label">Check out my Github</span>
              </a>
            </li>
            <li>
              <a
                aria-label="Check out my LinkedIn"
                href="https://www.linkedin.com/in/fullchee-zhang/"
                className="icon fa-linkedin"
              >
                <span className="label">Check out my LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                aria-label="Email me"
                href="mailto:fullchee@gmail.com"
                className="icon fa-envelope-o"
              >
                <span className="label">Email me</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
