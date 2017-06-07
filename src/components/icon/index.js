/**
 * @module react
 */
import React from 'react'

/**
 * @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 *  @module classNames
 */
import classNames from 'utils/classnames'

/**
 *  Icon
 *  @param  {Object} props
 *  @return {React.Component}
 */
const Icon = props => {
  const {
    className,
    modifier
  } = props

  // Get the correct social icon depending on the modifier.
  const modifiedClassNames = classNames('icon', className, modifier)

  return (
    <i className={modifiedClassNames}></i>
  )
}

/**
 *  propTypes
 *  @type {Object}
 */
Icon.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  modifier: PropTypes.string
}

/**
 *  defaultProps
 *  @type {Object}
 */
Icon.defaultProps = {
  className: ''
}

/**
 *  @module Icon
 */
export default Icon
