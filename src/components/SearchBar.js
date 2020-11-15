import React from "react";

class SearchBar extends React.Component {
  state = { value: "" };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
  };

  render() {
    return (
      <div className='search-bar ui segment'>
        <form className='ui form' onSubmit={this.onFormSubmit}>
          <div className='field'>
            <label>Video Search</label>
            <input
              className='prompt'
              type='text'
              value={this.state.value}
              onChange={this.handleChange}
            />
            <div className='results'></div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
