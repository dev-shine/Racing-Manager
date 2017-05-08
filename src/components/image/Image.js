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
 * Image component
 * @param { Object } props
 * @property { String } props.text
 * @returns { React.Component }
 */
const Image = props => {
  const { children, className, imageSrc } = props

  const _className = classNames('image', 'image-background', className)

  return (
    <div
      className={_className}
      style={{backgroundImage: `url(assets/${imageSrc})`}}>
      {children}
    </div>
  )
}

/**
 * Component props types
 * @type { Object }
 */
Image.propTypes = {
  imageSrc: PropTypes.string.isRequired
}

/**
 * Default component props
 * @type { Object }
 */
Image.defaultProps = {
  imageSrc: ''
}

export default Image
