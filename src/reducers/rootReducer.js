import { combineReducers } from 'redux'

import register from './register'
import horse from './horse'
import syndicate from './syndicate'
import browseHorses from './browsehorses'
import login from './login'

const rootReducer = combineReducers({
  register,
  horse,
  syndicate,
  browseHorses,
  login
})

export default rootReducer
