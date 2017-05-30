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

const TileAuthor = props => {
  const {
    className,
    modifier,
    name,
    date
  } = props

  const modifiedClassNames = classNames('tile-author', className, modifier)

  return (
    <div className={modifiedClassNames}>
      <div className='tile-author__name'>
        <p className='micro'>
          {name}
        </p>
      </div>
      <div className='tile-author__date'>
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
TileAuthor.propTypes = {
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
TileAuthor.defaultProps = {
  className: '',
  modifier: ''
}

/**
 *  @module TileAuthor
 */
export default TileAuthor
