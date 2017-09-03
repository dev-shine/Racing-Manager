import personalInformation from './PersonalInformation'

import contactDetails from './ContactDetails'

import { combineReducers } from 'redux'

const reducers = combineReducers({
  personalInformation,
  contactDetails
})

export default reducers
