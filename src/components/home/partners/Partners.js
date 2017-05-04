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
import ImageButton from 'components/buttons/ImageButton/ImageButton'

/**
 * Arrow component
 * @returns { React.Component }
 */
// TODO: Just create Image component!
const Arrow = props => {
  const { _className, onClick } = props
  return (
    <div
      className={_className}
      onClick={onClick}>
      <ImageButton
        className="partners__arrow-image"
        imageSrc="images/arrow-left.svg"/>
    </div>
  )
}

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
          className='partners__partner'>
          <div
            className='partners__partner-image image-background'
            style={{backgroundImage: `url(assets/images/partners/${i}.png)`}} />
        </div>
      )
    }
    return result
  }

  return (
    <div className={_className}>
      <div className='partners__slider-wrapper hidden-md-up'>
        <Slider
          className='partners__carousel'
          infinite
          autoplay
          initialSlide={1}
          prevArrow={<Arrow _className="partners__arrow-prev partners__arrow"/>}
          nextArrow={<Arrow _className="partners__arrow-next partners__arrow"/>}
          slidesToShow={3}
          speed={500}
          slidesToScroll={1}
          >
          {slides()}
        </Slider>
      </div>
      <div className="container visible-md-up">
        {slides()}
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
