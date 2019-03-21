import bitcoinReducer from './bitcoin'
import { FETCH_BITCOIN } from '../actions/constants'
import fetchMock from 'fetch-mock'

const mockResponse = { body: { bpi: 'bitcoin price index' } }
fetchMock.get('https://api.coindesk.com/v1/bpi/currentprice.json', mockResponse)

describe('bitcoinReducer', () => {
  it('fetch bitcoin', () => {
    const bitcoinData = { bpi: 'bitcoin price index' }
    const initialState = ''
    expect(bitcoinReducer(initialState, { type: FETCH_BITCOIN, bitcoin: bitcoinData })).toEqual(bitcoinData)
  })
})
