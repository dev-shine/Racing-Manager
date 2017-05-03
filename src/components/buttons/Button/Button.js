/**
 * @module react
 */
import React from 'react'

/**
 * @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 * Button component
 * @param { Object } props
 * @property { String } props.text
 * @returns { XML }
 */
const Button = props => {
  const { text, className, modifier, isDisabled, handleClick } = props

  return (
    <button className='button'>
      {text}
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
