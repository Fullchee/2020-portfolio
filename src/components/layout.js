import React from "react";
import PropTypes from "prop-types";
import "../assets/scss/main.scss";

import Header from "./Header";

export default class Template extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <Header />
        {children}
      </div>
    );
  }
}

Template.propTypes = {
  children: PropTypes.any
};
