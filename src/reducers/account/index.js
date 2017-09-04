import personalInformation from './PersonalInformation'

import contactDetails from './ContactDetails'

import resetPassword from './ResetPassword'

import billingAddress from './BillingAddress'

import creditCard from './CreditCard'

import { combineReducers } from 'redux'

const reducers = combineReducers({
  personalInformation,
  contactDetails,
  resetPassword,
  billingAddress,
  creditCard
})

export default reducers
