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
 * @returns { XML }
 */
const Button = props => {
  const { text, className, isDisabled, handleClick } = props

  const _className = classNames('button', className)

  return (
    <button
      className={_className}
      onClick={!isDisabled && handleClick}
      disabled={isDisabled}>
      <h6 className='button__text'>{text}</h6>
    </button>
  )
}

/**
 * Component props types
 * @type { Object }
 */
Button.propTypes = {
  text: PropTypes.string
}

/**
 * Default component props
 * @type { Object }
 */
Button.defaultProps = {
  text: ''
}

export default Button
