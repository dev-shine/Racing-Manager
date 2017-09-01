import { combineReducers } from 'redux'

import register from './register'
import horse from './horse'
import syndicate from './syndicate'
import browseHorses from './browsehorses'
import login from './login'
import auth from './auth'
import registrationConfirmation from './registrationconfirmation'
import dashboard from './dashboard'
import feedupdatepopup from './feedupdatepopup'
import account from './account'

const rootReducer = combineReducers({
  register,
  horse,
  syndicate,
  browseHorses,
  login,
  auth,
  registrationConfirmation,
  dashboard,
  feedupdatepopup,
  account
})

export default rootReducer
