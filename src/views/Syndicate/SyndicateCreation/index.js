/**
 *  @module react
 */
import React, { PureComponent } from 'react'

/**
 *  @module View
 */
import View from 'components/routing/View'

/**
 *  @module title
 */
import { CREATE_NEW_SYNDICATE as title } from 'data/titles'

/**
 *  @module ViewHeader
 */
import ViewHeader from 'components/common/ViewHeader'

import SoleOwner from 'components/syndicate/SyndicateNew/SoleOwner'

import JointOwnership from 'components/syndicate/SyndicateNew/JointOwnership'

import RacingPartnership from 'components/syndicate/SyndicateNew/RacingPartnership'

/**
 * @name Register
 * @class
 * @extends PureComponent
 */
export default class SyndicateCreation extends PureComponent {
  /**
   * @constructor
   * @param { Object } props
   */
  constructor (props) {
    super(props)
  }

  /**
   * Render method
   * @returns { React.Component }
   */
  render () {
    return (
      <View title={title}>
        <div className="create-new-syndicate">
          <div className="create-new-syndicate__header">
            <ViewHeader
              title={`create a syndicate`} />
          </div>
          <div className="container create-new-syndicate__section">
            <div className="row">
              <div className="sole-owner col-lg-5 col-md-5 col-sm-8 col-xs-12">
                <SoleOwner />
              </div>
            </div>
            <div className="row">
              <div className="joint-ownership col-lg-5 col-md-5 col-sm-8 col-xs-12">
                <JointOwnership />
              </div>
            </div>
            <div className="row">
              <div className="racing-partnership col-lg-5 col-md-5 col-sm-8 col-xs-12">
                <RacingPartnership />
              </div>
            </div>
          </div>
        </div>
      </View>
    )
  }
}
