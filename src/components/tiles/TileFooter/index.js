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

const TileFooter = props => {
  const {
    className,
    modifier
  } = props

  const modifiedClassNames = classNames('tile-footer', className, modifier)

  return (
    <div className={modifiedClassNames}>
      <div className='tile-footer__item'>
        <span className='tile-footer__icon icon-heart micro'></span>
        <p className='tile-footer__text micro'>2</p>
      </div>
      <div className='tile-footer__item'>
        <span className='tile-footer__icon icon-comment micro'></span>
        <p className='tile-footer__text micro'>10</p>
      </div>
    </div>
  )
}

/**
 *  propTypes
 *  @type {Object}
 */
TileFooter.propTypes = {
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
TileFooter.defaultProps = {
  className: '',
  modifier: ''
}

/**
 *  @module TileFooter
 */
export default TileFooter
