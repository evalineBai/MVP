import React from 'react';
import ReactDOM from 'react-dom';

class Account extends React.Component {
  constructor(props) {
    super(props);
  }

  makeTransactions() {
    var transactions = this.props.addresses.map((data, index) => {
      return data.recent_transactions.map((trans, index) => {
        return <ul key={index}>
          <li>Date: {trans.date}</li>
          <li>Hash: {trans.hash}</li>
          <li>Amount: {trans.amount}</li>
        </ul>
      })
    })
    return transactions;
  }

  render() {
    return (
      <div>
        <h3>Displaying Account Information for: {this.props.addresses.map((data, index) => {
          return <span key={index}>{data.address}</span>
          })}
        </h3>

        <h4>Balance (Satoshi): {this.props.addresses.map((data, index) => {
          return <span key={index}>{data.balance}</span>
          })}
        </h4>

        <h4>Total Satoshi Received: {this.props.addresses.map((data, index) => {
          return <span key={index}>{data.received}</span>
          })}
        </h4>

        <h4>Total Satoshi Sent: {this.props.addresses.map((data, index) => {
          return <span key={index}>{data.sent}</span>
          })}
        </h4>

        <h4>Transactions:</h4>
        <h5>{this.makeTransactions()}</h5>

      </div>
    )
  }
}

export default Account;