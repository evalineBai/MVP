import React from 'react';
import ReactDOM from 'react-dom';

const accountStyle = {
  'textAlign': 'left',
  'paddingTop': '60px',
  'marginLeft': '40px',
  'marginRight': '40px'
}

const spanStyle = {
  'width': '230px',
  'display': 'inline-block',
  'fontWeight': '900'
}

const transStyle = {
  'width': '100px',
  'display': 'inline-block',
  'fontWeight': '900'
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
          <li><span style={transStyle}>Date: </span><span>{trans.date}</span></li>
          <li><span style={transStyle}>Hash: </span><span>{trans.hash}</span></li>
          <li><span style={transStyle}>Amount: </span><span>{trans.amount}</span></li>
        </ul>
      })
    })
    return transactions;
  }

  render() {
    return (
      <div style={accountStyle}>

        <ul className="list-group">
          <li className="list-group-item"><span style={spanStyle}>Displaying Account: </span>{this.props.addresses.map((data, index) => {
          return <span key={index}>{data.address}</span>
          })}</li>
          <li className="list-group-item"><span style={spanStyle}>Balance (Satoshi): </span>{this.props.addresses.map((data, index) => {
          return <span key={index}>{data.balance}</span>
          })}</li>
          <li className="list-group-item"><span style={spanStyle}>Total Satoshi Received: </span>{this.props.addresses.map((data, index) => {
          return <span key={index}>{data.received}</span>
          })}</li>
          <li className="list-group-item"><span style={spanStyle}>Total Satoshi Sent: </span>{this.props.addresses.map((data, index) => {
          return <span key={index}>{data.sent}</span>
          })}</li>
          <li className="list-group-item"><span style={spanStyle}>Transactions: </span>{this.makeTransactions()}</li>
        </ul>

      </div>
    )
  }
}

export default Account;