/**
 *  @module React
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
 * @module Parallax
 */
import Parallax from 'components/utils/parallax/Parallax.js'

/**
 * ParallaxHero component
 * @param { Object } props
 * @property { String } props.featuredImage
 * @property { String | Array } [props.modifier = '']
 * @returns { React.Component }
 */
const ParallaxHero = props => {
  const { children, className, featuredImage } = props

  const _className = classNames('parallax-hero', className)

  return (
    <div className={_className}>
      <div className='parallax-hero__parallax'>
        <Parallax
          speed={-0.5}
          scope={400}
        >
          <div>
            <div className='parallax-hero__image full-height'
              style={{backgroundImage: `url(${featuredImage})`}} />
          </div>
        </Parallax>
        {children}
      </div>
    </div>
  )
}

/**
 * Component props types
 * @type { Object }
 */
ParallaxHero.propTypes = {
  featuredImage: PropTypes.string.isRequired,
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ])
}

/**
 * Default component props
 * @type { Object }
 */
ParallaxHero.defaultProps = {
  modifier: ''
}

export default ParallaxHero
