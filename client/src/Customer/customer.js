import React, { Component } from './node_modules/react';

class Customer extends Component {
    constructor(){
        super();
        this.state = {
            customer:[]
        }
    }

    componentDidMount(){
        fetch('/customer/getAll')
        .then(res => res.json())
        .then((customer) => { this.setState({customer},() => console.log(customer)) })
    }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        Customer
        <ul>
            {this.state.customer.map(customer=>
            <li key={customer.id}>{customer.fname}{customer.lname}</li>
            )}
        </ul>
      </header>
    </div>
  );
}
}

export default Customer;
