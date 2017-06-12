/**
 *  This card is used for the horse overview and syndicate overview pages.
 */

/**
 *  @module React
 */
import React, { Component } from 'react'

/**
 *  @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 *  @module Image
 */
import Image from 'components/image'

/**
 *  @module classNames
 */
import classNames from 'utils/classnames'

import {
  horseRaceImg
} from 'assets/dummyassets'

/**
 *  @class
 *  @name OverviewCard
 *  @extends {Component}
 */
class OverviewCard extends Component {
  /**
   *  @constructor
   */
  constructor (props) {
    super(props)
  }

  render () {
    const {
      className,
      modifier,
      title
    } = this.props

    // Modified class names for overview card.
    const modifiedClassNames = classNames('overview-card', className, modifier)

    return (
      <div className={modifiedClassNames}>
        <Image
          className='overview-card__bg'
          imageSrc={horseRaceImg}
          forceShow={true} />
        <div className='overview-card__content'>
          <div className='overview-card__card'>
            <div className='overview-card__heading'>
              <h3>
                {title}
              </h3>
              <h6 className='secondary-font'>
                2yo Filly, National Hunt (Jump)
              </h6>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

/**
 *  propTypes
 *  @type {Object}
 */
OverviewCard.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  title: PropTypes.string
}

/**
 *  defaultProps
 *  @type {Object}
 */
OverviewCard.defaultProps = {
  className: '',
  title: 'contrabrand horse'
}

/**
 *  @module OverviewCard
 */
export default OverviewCard
