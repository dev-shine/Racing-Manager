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
  const { children, className, isDisabled, onClick } = props

  const _className = classNames('button', className)

  return (
    <button
      className={_className}
      onClick={!isDisabled && onClick}
      disabled={isDisabled}>
      {children}
    </button>
  )
}

/**
 * Component props types
 * @type { Object }
 */
Button.propTypes = {
}

/**
 * Default component props
 * @type { Object }
 */
Button.defaultProps = {
}

export default Button
