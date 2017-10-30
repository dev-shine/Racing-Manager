// import registerSyndicateName from './registerSyndicateName'
// import registerSyndicateColours from './registerSyndicateColours'
import registerSyndicateMembers from './registerSyndicateMembers'
import AddMemberForm from './AddMemberForm'

import { combineReducers } from 'redux'

const combinedRegisterSyndicateReducers = combineReducers({
  // syndicateName: registerSyndicateName,
  // syndicateColours: registerSyndicateColours,
  syndicateMembers: registerSyndicateMembers,
  membersFormData: AddMemberForm
})

export default combinedRegisterSyndicateReducers
