import React from 'react';
import ReactDOM from 'react-dom';

const searchStyle = {
  'paddingTop': '60px',
}

const buttonStyle = {
  'marginRight': '10px',
  'height': '35px'
}

const formStyle = {
  'width': '500px'
}

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }

  onChange (e) {
    this.setState({
      searchTerm: e.target.value
    });
  }

  search() {
    this.props.onSearch(this.state.searchTerm);
  }

  render() {
    return (<div style={searchStyle}>
      <button type="button" className="btn btn-info" style={buttonStyle} onClick={this.search.bind(this)}>Search Public Key</button>
      <input style={formStyle} value={this.state.addresses} onChange={this.onChange.bind(this)}/>
    </div>)
  }
}

export default Search;