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
 *  SocialIcon
 *  @param  {Object} props
 *  @return {React.Component}
 */
const SocialIcon = props => {
  const {
    className,
    modifier
  } = props

  // Construct class names.
  const modifiedClassNames = classNames('social-icon', className)

  // Get the correct social icon depending on the modifier.
  const modifiedIconClassNames = classNames('icon', '', modifier)

  return (
    <a className={modifiedClassNames} target='_blank'>
      <span className={modifiedIconClassNames}></span>
    </a>
  )
}

/**
 *  propTypes
 *  @type {Object}
 */
SocialIcon.propTypes = {
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
SocialIcon.defaultProps = {
  className: ''
}

/**
 *  @module SocialIcon
 */
export default SocialIcon
