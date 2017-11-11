import registerSyndicateName from './registerSyndicateName'
import registerSyndicateColours from './registerSyndicateColours'
import registerSyndicateMembers from './registerSyndicateMembers'

import { combineReducers } from 'redux'

const combinedRegisterSyndicateReducers = combineReducers({
  syndicateName: registerSyndicateName,
  syndicateColours: registerSyndicateColours,
  syndicateMembers: registerSyndicateMembers
})

export default combinedRegisterSyndicateReducers
