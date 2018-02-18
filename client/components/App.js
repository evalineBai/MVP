import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search.js';
import Account from './Account.js';
import Header from './Header.js';
import Footer from './Footer.js';
import axios from 'axios';

const appStyle = {
  'textAlign': 'center',
  'margin': '30px',
  'fontFamily': 'Arial'
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
        <Header/>
        <Search onSearch={this.search.bind(this)}/>
        <Account addresses={this.state.addresses}/>
        <Footer/>

      </div>
    );
  }
}

export default App;