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

/**
 *  @module Button
 */
import Button from 'components/buttons/Button'

/**
 * TextButton component
 * @param { Object } props
 * @property { String } props.text
 * @returns { React.Component }
 */
const TextButton = props => {
  const {
    text,
    className,
    // size,
    // theme,
    modifiers
  } = props

  /**
   *  @type {String}
   */
  const modifiedClassNames = classNames('text-button', className, modifiers)

  /* {
    'text-button--sm': size === 'sm',
    'text-button--secondary': theme === 'secondary'

  }) */

  return (
    Button({
      ...props,
      className: modifiedClassNames,
      children: <h6 className='text-button__text'>{text}</h6>
    })
  )
}

/**
 * Component props types
 * @type { Object }
 */
TextButton.propTypes = {
  text: PropTypes.string,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  modifiers: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ])
}

/**
 * Default component props
 * @type { Object }
 */
TextButton.defaultProps = {
  text: '',
  className: '',
  modifiers: ''
}

export default TextButton
