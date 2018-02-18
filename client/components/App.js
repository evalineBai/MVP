import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search.js';
import Account from './Account.js';
import axios from 'axios';

const appStyle = {
  'textAlign': 'left',
  'margin': '20px'
}

class App extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      addresses: []
    }
  }

  search (publicKey) {
    console.log(`Searching for ${publicKey}`);
    axios.post('/accounts', {
      address: `${publicKey}`
    })
    .then(res => {
      console.log(res);
      axios.get(`/accounts?address=${publicKey}`)
      .then(res => {
        const addresses = res.data;
        console.log(addresses);
        this.setState({addresses});
      })
    })
    .catch(err => {
      console.log('Error saving user data', err)
    })
  }

  render () {
    return (
      <div style={appStyle}>
        <h2>Blockchain Explorer</h2>
        <h4>Explore Activity Behind Public Keys</h4>

        <Search onSearch={this.search.bind(this)}/>

        <Account addresses={this.state.addresses}/>

      </div>
    );
  }
}

export default App;