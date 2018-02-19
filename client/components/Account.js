import React from 'react';
import ReactDOM from 'react-dom';

const accountStyle = {
  'textAlign': 'left',
  'paddingTop': '60px',
  'marginLeft': '40px',
  'marginRight': '40px'
}

const spanStyle = {
  'fontWeight': 'lighter',
  'fontSize': '15px'
}

const ulStyle = {
  'marginLeft': '30px',
  'paddingTop': '20px'
}

class Account extends React.Component {
  constructor(props) {
    super(props);
  }

  makeTransactions() {
    var transactions = this.props.addresses.map((data, index) => {
      return data.recent_transactions.map((trans, index) => {
        return <ul className="list-unstyled" style={ulStyle} key={index}>
          <li>Date: <span style={spanStyle}>{trans.date}</span></li>
          <li>Hash: <span style={spanStyle}>{trans.hash}</span></li>
          <li>Amount: <span style={spanStyle}>{trans.amount}</span></li>
        </ul>
      })
    })
    return transactions;
  }

  render() {
    return (
      <div style={accountStyle}>

        <ul className="list-group">
          <li className="list-group-item">Displaying Account: {this.props.addresses.map((data, index) => {
          return <span style={spanStyle} key={index}>{data.address}</span>
          })}</li>
          <li className="list-group-item">Balance (Satoshi): {this.props.addresses.map((data, index) => {
          return <span style={spanStyle} key={index}>{data.balance}</span>
          })}</li>
          <li className="list-group-item">Total Satoshi Received: {this.props.addresses.map((data, index) => {
          return <span style={spanStyle} key={index}>{data.received}</span>
          })}</li>
          <li className="list-group-item">Total Satoshi Sent: {this.props.addresses.map((data, index) => {
          return <span style={spanStyle} key={index}>{data.sent}</span>
          })}</li>
          <li className="list-group-item">Transactions: {this.makeTransactions()}</li>
        </ul>

      </div>
    )
  }
}

export default Account;