/**
 * @module react
 */
import React, { Component } from 'react'

/**
 * @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 * @module classNames
 */
import classNames from 'utils/classnames'

/**
 *  @module Accordion
 */
import Accordion from 'accordion/BaseAccordion'

/**
 *  @module baseTile
 */
import baseTile from 'components/tiles/BaseTile'

/**
 *  @class
 *  @name FeedSubmitTile
 *  @extends {Component}
 */
class FeedSubmitTile extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Accordion />
    )
  }
}

/**
 *  defaultProps
 *  @type {Object}
 */
FeedSubmitTile.defaultProps = {

}

/**
 *  propTypes
 *  @type {Object}
 */
FeedSubmitTile.propTypes = {

}

/**
 *  @module FeedSubmitTile
 */
export default baseTile(FeedSubmitTile)
