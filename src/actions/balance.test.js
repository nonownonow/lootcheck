import * as constants from './constants'
import * as action from './balance'

it('creates an action to set the balance', () => {
  const balance = 0
  const expectedAction = { type: constants.SET_BALANCE, balance }

  expect(action.setBalance(balance)).toEqual(expectedAction)
})

it('creates an action to deposit into the balance', () => {
  const deposit = 10
  const expectedAction = { type: constants.DEPOSIT, deposit }

  expect(action.deposit(deposit)).toEqual(expectedAction)
})

it('creates an action to withdraw from the balance', () => {
  const withdrawal = 10
  const expectedAction = { type: constants.WITHDRAW, withdrawal }

  expect(action.withdraw(withdrawal)).toEqual(expectedAction)
})
