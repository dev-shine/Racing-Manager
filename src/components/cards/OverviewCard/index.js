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

/**
 *  @module TextButton
 */
import TextButton from 'components/buttons/TextButton'

// Dummy race horse image
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
      title,
      subtitle,
      stats,
      info
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
                {subtitle}
              </h6>
              <div className='overview-card__stats'>
                {
                  stats.map(({name, value}, index) => {
                    return (
                      <div className='overview-card__statsitem col-xs-3' key={index}>
                        <h6 className='secondary-font'>
                          {name}
                        </h6>
                        <h6>
                          {value}
                        </h6>
                      </div>
                    )
                  })
                }
              </div>
              <div className='overview-card__gradiant'></div>
            </div>
            <div className='overview-card__info'>
              <ul className='overview-card__infolist'>
                {
                  info.map(({name, value}, index) => {
                    return (
                      <li className='overview-card__infoitem' key={index}>
                        <h6 className='secondary-font col-xs-6'>
                          {name}
                        </h6>
                        <p className='micro col-xs-6'>
                          {value}
                        </p>
                      </li>
                    )
                  })
                }
              </ul>
              <div className='overview-card__gradiant'></div>
            </div>
            <div className='overview-card__extra'>
              <TextButton
                text='horse updates'
                className='overview-card__button'
                modifier='secondary'
                onClick={() => {}} />
            </div>
          </div>
        </div>
        <div className='overview-card__bottom-button'>
          <TextButton
            text='more details'
            className='overview-card__button'
            modifier='secondary'
            onClick={() => {}} />
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
  title: PropTypes.string,
  subtitle: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  })),
  info: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  }))
}

/**
 *  defaultProps
 *  @type {Object}
 */
OverviewCard.defaultProps = {
  className: '',
  title: 'contrabrand horse',
  subtitle: '2yo Filly, National Hunt (Jump)',
  stats: [{
    name: 'runs',
    value: 6
  }, {
    name: 'wins',
    value: 1
  }, {
    name: 'places',
    value: 2
  }, {
    name: 'OR',
    value: 93
  }],
  info: [{
    name: 'Trainer name',
    value: 'Jacob William Beckett'
  }, {
    name: 'Syndicate name',
    value: 'Vitamin London'
  }, {
    name: 'Initial cost/share',
    value: '£15,750 + VAT'
  }, {
    name: 'Monthly cost/share',
    value: '£4,995 + VAT'
  }]
}

/**
 *  @module OverviewCard
 */
export default OverviewCard
