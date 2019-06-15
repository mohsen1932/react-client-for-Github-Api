import React, { Component } from "react";
import PropTypes from "prop-types";
import { SearchBox } from "./styles";

export class Search extends Component {
  state = {
    keyword: ""
  };
  handleChange = e => {
    const { value } = e.target;
    this.setState({
      keyword: value.toLowerCase().trim()
    });
  };
  handleClick = e => {
    const { onFilter } = this.props;
    const { keyword } = this.state;
    if (!keyword) return;
    onFilter(keyword);
  };
  render() {
    return (
      <SearchBox>
        <input
          type="text"
          name="keyword"
          className="search-input"
          placeholder="Search Repositories ..."
          onChange={this.handleChange}
        />
        <button className="search-btn" onClick={this.handleClick}>
          Search
        </button>
      </SearchBox>
    );
  }
}
Search.propTypes = {
  onFilter: PropTypes.func
};
export default Search;
