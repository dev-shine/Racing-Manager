/**
 * @module react
 */
import React from 'react'

/**
 * @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 *  @module Icon
 */
import Icon from 'components/icon'

/**
 * @module classNames
 */
import classNames from 'utils/classnames'

/**
 *  @module stopPropagation
 */
import { stopPropagation } from 'utils/domutils'

const TileFooter = props => {
  const {
    className,
    modifier,
    onSocialShare
  } = props

  const modifiedClassNames = classNames('tile-footer', className, modifier)

  return (
    <div className={modifiedClassNames} onClick={stopPropagation}>
      <div className='tile-footer__item'>
        <Icon
          className='tile-footer__icon micro'
          modifier='heart' />
        <p className='tile-footer__text micro'></p>
      </div>
      <div className='tile-footer__item'>
        <Icon
          className='tile-footer__icon micro'
          modifier='comment' />
        <p className='tile-footer__text micro'></p>
      </div>
      <div className='tile-footer__item' onClick={onSocialShare}>
        <Icon
          className='tile-footer__icon micro'
          modifier='share' />
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
  ]),
  onSocialShare: PropTypes.func
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
