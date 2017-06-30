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

/**
 *  @module Link
 */
import { Link } from 'react-router-dom'

// Dummy race horse image
import {
  horseOverview
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
    <div className='horse-card__overlay' />
  )
}

/**
 *  @class
 *  @name HorseCard
 *  @extends {Component}
 */
class HorseCard extends Component {
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
      color,
      stats,
      info,
      isMember,
      extra,
      src,
      isPending,
      isActive,
      bottomUrl
    } = this.props

    // Modified class names for horse card.
    const modifiedClassNames = classNames('horse-card', className, modifier)

    // Modified class names for the wrapper to scale it down if the component is inactive
    const modifiedWrapperClassNames = classNames('horse-card__wrapper', '', {
      inactive: !isActive
    })

    return (
      <div className={modifiedClassNames}>
        <div className={modifiedWrapperClassNames}>
          {
            isPending
            ? <div className='horse-card__banner'>
                <h6 className='secondary-font'>pending</h6>
              </div>
            : null
          }
          <Image
            className='horse-card__bg'
            imageSrc={src}
            forceShow={true} />
          <div className='horse-card__content'>
            <div className='horse-card__card' style={{ borderColor: color }}>
              <div className='horse-card__heading'>
                <h3>
                  {title}
                </h3>
                <h6 className='secondary-font capitalize'>
                  {subtitle}
                </h6>
                <div className='horse-card__stats'>
                  {
                    stats.map(({name, value}, index) => {
                      return (
                        <div className='horse-card__statsitem col-xs-3' key={index}>
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
              <div className='horse-card__info section-shadow'>
                <ul className='horse-card__infolist'>
                  {
                    info.map(({name, value}, index) => {
                      return (
                        <li className='horse-card__infoitem' key={index}>
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
              <div className='horse-card__extra section-shadow'>
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
                      <Link to={extra.url}>
                        <UpdatesButton
                          amount={extra.updateAmount}
                          text='horse updates'
                          buttonClassName='horse-card__button'
                          buttonModifier='secondary'
                          onClick={noop} />
                      </Link>
                    )
                }
                {
                  isPending
                  ? <Overlay />
                  : null
                }
              </div>
            </div>
          </div>
          {bottomUrl && (
              <div className='horse-card__bottom-button'>
                <Link to={bottomUrl}>
                  <TextButton
                    text={isMember ? 'Syndicate Page' : 'more details'}
                    className='horse-card__button'
                    modifier='secondary'
                  />
                </Link>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

/**
 *  propTypes
 *  @type {Object}
 */
HorseCard.propTypes = {
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
HorseCard.defaultProps = {
  className: '',
  title: 'contrabrand horse',
  subtitle: '2yo Filly, National Hunt (Jump)',
  color: '#000',
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
    updateAmount: 99,
    url: 'null'
  },
  bottomUrl: 'null',
  isMember: true,
  src: horseOverview,
  isPending: false,
  isActive: true
}

/**
 *  @module HorseCard
 */
export default HorseCard
