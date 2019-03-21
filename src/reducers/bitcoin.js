import { FETCH_BITCOIN } from '../actions/constants'

function bitcoin (store = {}, action) {
  let bitcoin
  switch (action.type) {
    case FETCH_BITCOIN:
      bitcoin = action.bitcoin
      break
    default:
      bitcoin = store
  }
  return bitcoin
}

export default bitcoin
