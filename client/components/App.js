import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search.js';
import Account from './Account.js';
import axios from 'axios';
import './App.css';

class App extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      addresses: []
    }
  }

  search (publicKey) {
    console.log(`${publicKey} was searched`);
    axios.post('/accounts', {
      address: `${publicKey}`
    })
    .then(res => {
      console.log(res);
      axios.get('/accounts')
      .then(res => {
        const addresses = res.data;
        this.setState({addresses});
      })
    })
    .catch(err => {
      console.log('Error saving user data', err)
    })
  }

  componentDidMount () {
    axios.get('/accounts')
    .then(res => {
      const addresses = res.data;
      console.log(addresses);
      this.setState({addresses});
    })
    .catch(err => {
      console.log('Error fetching and parsing data', err);
    });
  }

  render () {
    return (
      <div className="App">
        <h2>Blockchain Explorer</h2>
        <h4>Explore Activity Behind Public Keys</h4>

        <Search onSearch={this.search.bind(this)}/>

        <Account addresses={this.state.addresses}/>

      </div>
    );
  }
}

export default App;