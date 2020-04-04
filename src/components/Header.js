import React from "react";

import Footer from "./Footer";
import avatar from "../assets/images/avatar.jpg";

export default class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <p href="#" className="image avatar">
            <img src={avatar} alt="" />
          </p>
          <h1>
            <strong className="name">Fullchee Zhang</strong>
          </h1>
          <h4 className="pronunciation">
            (&quot;<strong className="name-emph">Full</strong> of{" "}
            <strong className="name-emph">chee</strong>se&quot;)
          </h4>

          <h2 className="job-title">Full-stack developer at IBM</h2>

          {/* <p className="one-phrase-pitch">
            Persistent developer who&apos;s always striving to be better
          </p> */}
        </div>
        <Footer />
      </header>
    );
  }
}
