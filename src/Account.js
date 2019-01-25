import React, { Component } from 'react';

export default class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 0
    };
    this.handleDepositClick = this.handleDepositClick.bind(this);
    this.handleWithdrawalClick = this.handleWithdrawalClick.bind(this)
  }

  handleDepositClick(e) {
    e.preventDefault();
    if (isNaN(this.refs.amount.value)) {
      console.log("Not a number");
    }
    else {
      let amount = +this.refs.amount.value;
      let newBalance = this.state.balance + amount;
      this.setState({
        balance: newBalance
      })
      this.refs.amount.value = '';
    }
  }

  handleWithdrawalClick(e) {
    e.preventDefault();
    if (isNaN(this.refs.amount.value)) {
      console.log("Not a number");
    }
    else {
      let amount = +this.refs.amount.value;
      let newBalance = this.state.balance - amount;
      this.setState({
        balance: newBalance
      })
      this.refs.amount.value = '';
    }
  }

  render() {
    let balanceClass = 'balance';
    if (this.state.balance === 0) {
      balanceClass += ' zero';
    }

    return (
        <div className="account">
          <h2>{this.props.name}</h2>
          <div className={balanceClass}>${this.state.balance}</div>
          <div>
            <input type="text" placeholder="enter an amount" className="widget" ref="amount" /> 
            <input type="button" value="Deposit" className="widget" onClick={this.handleDepositClick} /> 
            <input type="button" value="Withdrawal" className="widget" onClick={this.handleWithdrawalClick} />
          </div>
      </div>
      
    )
  }
}
