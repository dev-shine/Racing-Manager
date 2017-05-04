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
 * ImageButton component
 * @param { Object } props
 * @property { String } props.text
 * @returns { React.Component }
 */
const ImageButton = props => {
  const { className, imageSrc } = props

  const _className = classNames('image-button', 'image-background', className)

  return (
    Button({
      ...props,
      className: _className,
      style: { backgroundImage: `url(assets/${imageSrc})`}
    })
  )
}

/**
 * Component props types
 * @type { Object }
 */
ImageButton.propTypes = {
  text: PropTypes.string
}

/**
 * Default component props
 * @type { Object }
 */
ImageButton.defaultProps = {
  text: ''
}

export default ImageButton
