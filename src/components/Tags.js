import PropTypes from "prop-types";
import React, { Component } from "react";
import { ALL_TAGS } from "../assets/projects";

export default class Tags extends Component {
  constructor() {
    super();

    this.state = {
      tags: ALL_TAGS
    };
  }
  render() {
    const buttons = this.state.tags.map(tag => {
      return (
        <button
          className="tag"
          key={tag}
          data-selected={this.props.filter === tag}
          onClick={this.props.tagClick}
          data-value={tag}
        >
          {tag}
        </button>
      );
    });
    return (
      <div>
        <button
          className="tag"
          data-value=""
          data-selected={this.props.filter === ""}
          onClick={this.props.tagClick}
        >
          Show all
        </button>
        {buttons}
      </div>
    );
  }
}

Tags.propTypes = {
  filter: PropTypes.any,
  tagClick: PropTypes.any
};
