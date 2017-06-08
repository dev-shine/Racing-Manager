/**
 *  @module React
 */
import React, { Component } from 'react'

/**
 *  @module BasePopup
 */
import BasePopup from 'components/popup/BasePopup'

/**
 *  @class
 *  @name FeedTilesPopup
 *  @extends {Component}
 */
class FeedTilesPopup extends Component {
  /**
   *  @constructor
   */
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div></div>
    )
  }
}

/**
 *  @module FeedTilesPopup
 */
export default BasePopup(FeedTilesPopup)
