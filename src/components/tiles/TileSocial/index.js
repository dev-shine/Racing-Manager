/**
 * @module react
 */
import React from 'react'

/**
 * @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 * @module classNames
 */
import classNames from 'utils/classnames'

const TileSocial = props => {
  const {
    className,
    modifier
  } = props

  const modifiedClassNames = classNames('tile-social', className, modifier)

  return (
    <div className={modifiedClassNames}>
      <div className='tile-social__item'>
        <span className='tile-social__icon icon-heart micro'></span>
        <p className='tile-social__text micro'>2</p>
      </div>
      <div className='tile-social__item'>
        <span className='tile-social__icon icon-comment micro'></span>
        <p className='tile-social__text micro'>10</p>
      </div>
    </div>
  )
}

/**
 *  propTypes
 *  @type {Object}
 */
TileSocial.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ])
}

/**
 *  defaultProps
 *  @type {Object}
 */
TileSocial.defaultProps = {
  className: '',
  modifier: ''
}

/**
 *  @module TileSocial
 */
export default TileSocial
