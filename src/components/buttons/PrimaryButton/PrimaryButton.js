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
 * PrimaryButton component
 * @param { Object } props
 * @property { String } props.text
 * @returns { React.Component }
 */
const PrimaryButton = props => {
  const { text, className, size } = props

  const _className = classNames('primary-button', className, {
    'primary-button--sm': size === 'sm'
  })

  return (
    Button({
      ...props,
      className: _className,
      children: <h6 className='primary-button__text'>{text}</h6>
    })
  )
}

/**
 * Component props types
 * @type { Object }
 */
PrimaryButton.propTypes = {
  text: PropTypes.string
}

/**
 * Default component props
 * @type { Object }
 */
PrimaryButton.defaultProps = {
  text: ''
}

export default PrimaryButton
