/**
 *  @module React
 */
import React from 'react'
import PropTypes from 'prop-types'

/**
 * @module classNames
 */
import classNames from 'classnames'

/**
 * @module Carousel
 */
import Slider from 'react-slick'
import Button from 'components/buttons/Button/Button'

/**
 * Partners component
 * @param { Object } props
 * @property { String } props.featuredImage
 * @property { String | Array } [props.modifier = '']
 * @returns { React.Component }
 */
const Partners = props => {
  const { className } = props

  const _className = classNames('partners', className)

  const slides = () => {
    let result = []
    for (let i = 1; i < 5; i++) {
      result.push(
        <div
          key={i}
          className='partners__slide-container'>
          <div
            className='partners__slide image-background'
            style={{backgroundImage: `url(assets/images/partners/${i}.png)`}} />
        </div>
      )
    }
    return result
  }

  return (
    <div className={_className}>
      <div className='partners__slider-wrapper'>
        <Slider
          className='partners__carousel'
          infinite
          autoplay
          slidesToShow={3}
          speed={500}
          slidesToScroll={1}
          >
          {slides()}
        </Slider>
      </div>
    </div>
  )
}

/**
 * Component props types
 * @type { Object }
 */
Partners.propTypes = {
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ])
}

/**
 * Default component props
 * @type { Object }
 */
Partners.defaultProps = {
  modifier: ''
}

export default Partners
