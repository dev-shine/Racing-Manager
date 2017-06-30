import { combineReducers } from 'redux'

import register from './register'
import horse from './horse'
import syndicate from './syndicate'

const rootReducer = combineReducers({
  register,
  horse,
  syndicate
})

export default rootReducer
