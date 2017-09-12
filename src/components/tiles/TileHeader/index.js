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

const TileHeader = props => {
  const {
    className,
    modifier,
    name,
    date
  } = props

  const modifiedClassNames = classNames('tile-header', className, modifier)

  return (
    <div className={modifiedClassNames}>
      <div className='tile-header__name'>
        <p className='micro'>
          {name}
        </p>
      </div>
      <div className='tile-header__date'>
        <p className='micro'>
          {date}
        </p>
      </div>
    </div>
  )
}

/**
 *  propTypes
 *  @type {Object}
 */
TileHeader.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  name: PropTypes.string,
  date: PropTypes.string
}

/**
 *  defaultProps
 *  @type {Object}
 */
TileHeader.defaultProps = {
  className: '',
  modifier: ''
}

/**
 *  @module TileHeader
 */
export default TileHeader
