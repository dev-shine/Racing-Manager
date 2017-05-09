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
 *  @module Button
 */
import Button from 'components/buttons/Button/Button'

/**
 * TextButton component
 * @param { Object } props
 * @property { String } props.text
 * @returns { React.Component }
 */
const TextButton = props => {
  const { text, className, size, theme } = props

  const _className = classNames('text-button', className, {
    'text-button--sm': size === 'sm',
    'text-button--secondary': theme === 'secondary'

  })

  return (
    Button({
      ...props,
      className: _className,
      children: <h6 className='text-button__text'>{text}</h6>
    })
  )
}

/**
 * Component props types
 * @type { Object }
 */
TextButton.propTypes = {
  text: PropTypes.string
}

/**
 * Default component props
 * @type { Object }
 */
TextButton.defaultProps = {
  text: ''
}

export default TextButton
