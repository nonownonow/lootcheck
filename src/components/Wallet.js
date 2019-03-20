import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deposit, withdraw } from '../actions/balance'

export class Wallet extends Component {
  constructor () {
    super()
    this.state = { balance: 'undefined' }
  }

  updateBalance (e) {
    const balance = parseInt(e.target.value, 10)
    this.setState({ balance })
  }

  render () {
    return (
      <div>
        <h3 className='balance'>Wallet balance: {this.props.balance}</h3>
        <br/>
        <input className='input-wallet' onChange={e => this.updateBalance(e)}/>
        <button className='btn-deposit' onClick={e => this.props.deposit(this.state.balance)}> deposit</button>
        <button className='btn-withdraw' onClick={e => this.props.withdraw(this.state.balance)}> withdraw</button>
      </div>
    )
  }
}

export default connect(state => ({ balance: state }), {deposit, withdraw})(Wallet)
