/**
 *  @module react
 */
import React, { PureComponent } from 'react'

/**
 *  @module ViewHeader
 */
import ViewHeader from 'components/common/ViewHeader'

import View from 'components/routing/View'

import ExistingSyndicate from 'components/Syndicate/SyndicateExisting'

import NewSyndicate from 'components/Syndicate/SyndicateNew'

import { SYNDICATE_MAIN as title } from 'data/titles'

class SyndicateMain extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <View title={title}>
        <div className="syndicate-main">
          <ViewHeader
            title='Syndicates'/>
          <div className="syndicate-section">
            <div className="existing-syndicate-section">
              <ExistingSyndicate />
            </div>
            <div className="new-syndicate-section">
              <NewSyndicate />
            </div>
          </div>
        </div>
      </View>
    )
  }
}

export default SyndicateMain
