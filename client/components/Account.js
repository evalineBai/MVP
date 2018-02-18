import React from 'react';

class Account extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      {console.log(this.props)}
        <h2>Displaying Account Information for:</h2>
        <ul>
          {this.props.addresses.map((data, index) => {
            return <li key={index}>{data.address}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default Account;