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
import classNames from 'classnames'

/**
 * Button component
 * @param { Object } props
 * @property { String } props.text
 * @returns { React.Component }
 */
const Button = props => {
  const { children, className, style, isDisabled, onClick } = props

  const _className = classNames('button', className)

  return (
    <button
      className={_className}
      style={style}
      onClick={!isDisabled && onClick}
      disabled={isDisabled || !onClick}>
      {children}
    </button>
  )
}

/**
 * Component props types
 * @type { Object }
 */
Button.propTypes = {
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func
}

/**
 * Default component props
 * @type { Object }
 */
Button.defaultProps = {
  isDisabled: false
}

export default Button
