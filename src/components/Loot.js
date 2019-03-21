import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchBitcoin } from '../actions/bitcoin'

export class Loot extends Component {
  computeBitcoin () {
    const {bitcoin} = this.props
    if(Object.keys(bitcoin).length === 0) return ''
    return this.props.balance / parseInt(bitcoin.bpi.USD.rate.replace(',',''), 10)
  }

  render () {
    return (
      <h3>Bitcoin balance: {this.computeBitcoin()}</h3>
    )
  }

  componentDidMount () {
    this.props.fetchBitcoin()
  }
}

export default connect(state => state, { fetchBitcoin })(Loot)
