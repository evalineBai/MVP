import React from 'react';
import ReactDOM from 'react-dom';

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
    return (<div>
      Enter A Public Key: <input value={this.state.addresses} onChange={this.onChange.bind(this)}/>
      <button onClick={this.search.bind(this)}>Search</button>
    </div>)
  }
}

export default Search;