import { combineReducers } from 'redux'

import register from './register'
import horse from './horse'
import syndicate from './syndicate'
import browseHorses from './browsehorses'
import login from './login'
import auth from './auth'
import registrationConfirmation from './registrationconfirmation'

const rootReducer = combineReducers({
  register,
  horse,
  syndicate,
  browseHorses,
  login,
  auth,
  registrationConfirmation
})

export default rootReducer
