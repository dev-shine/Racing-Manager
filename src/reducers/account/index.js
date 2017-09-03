import personalInformation from './PersonalInformation'

import contactDetails from './ContactDetails'

import resetPassword from './ResetPassword'

import { combineReducers } from 'redux'

const reducers = combineReducers({
  personalInformation,
  contactDetails,
  resetPassword
})

export default reducers
