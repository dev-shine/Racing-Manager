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

/**
 *  @module UpdatesButton
 */
import UpdatesButton from 'components/buttons/UpdatesButton'

// Dummy race horse image
import {
  horseRaceImg
} from 'assets/dummyassets'

/**
 *  Dummy function
 */
const noop = () => {}

/**
 *  @name Overlay
 *  @return {Component}
 */
export const Overlay = () => {
  return (
    <div className='overview-card__overlay' />
  )
}

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
      info,
      isMember,
      extra,
      src,
      isPending,
      isActive
    } = this.props

    // Modified class names for overview card.
    const modifiedClassNames = classNames('overview-card', className, modifier)

    // Modified class names for the wrapper to scale it down if the component is inactive
    const modifiedWrapperClassNames = classNames('overview-card__wrapper', '', {
      inactive: !isActive
    })

    return (
      <div className={modifiedClassNames}>
        <div className={modifiedWrapperClassNames}>
          {
            isPending
            ? <div className='overview-card__banner'>
                <h6 className='secondary-font'>pending</h6>
              </div>
            : null
          }
          <Image
            className='overview-card__bg'
            imageSrc={src}
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
              </div>
              <div className='overview-card__info'>
                <div className='overview-card__gradiant overview-card__gradiant--top'></div>
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
              </div>
              <div className='overview-card__extra'>
                {
                  !isMember
                  ? (
                      <span>
                        <h6 className='secondary-font'>
                          {extra.title}
                        </h6>
                        <p className='micro'>
                          {extra.text}
                        </p>
                      </span>
                    )
                  : (
                      <UpdatesButton
                        amount={extra.updateAmount}
                        text='horse updates'
                        buttonClassName='overview-card__button'
                        buttonModifier='secondary'
                        onClick={noop} />
                    )
                }
                {
                  isPending
                  ? <Overlay />
                  : null
                }
                <div className='overview-card__gradiant overview-card__gradiant--top'></div>
              </div>
            </div>
          </div>
          <div className='overview-card__bottom-button'>
            <TextButton
              text={isMember ? 'Syndicate Page' : 'more details'}
              className='overview-card__button'
              modifier='secondary'
              onClick={noop} />
          </div>
        </div>
        {
          !isActive
          ? <Overlay />
          : null
          }
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
  src: PropTypes.string,
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
  })),
  extra: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    updateAmount: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  }),
  isMember: PropTypes.bool,
  isPending: PropTypes.bool,
  isActive: PropTypes.bool
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
  }],
  extra: {
    title: '5 of 20 shares available',
    text: '*each share is equivalent to 5%',
    updateAmount: 99
  },
  isMember: true,
  src: horseRaceImg,
  isPending: false,
  isActive: true
}

/**
 *  @module OverviewCard
 */
export default OverviewCard
