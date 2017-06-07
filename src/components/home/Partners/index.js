/**
 *  @module React
 */
import React from 'react'

/**
 *  @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 * @module classNames
 */
import classNames from 'utils/classnames'

/**
 * @module Slider
 */
import Slider from 'react-slick'

/**
 * @module Image
 */
import Image from 'components/image'

/**
 *  @module images
 */
import * as partnerImages from 'assets/home/partners'

/**
 * @name Arrow
 * @returns { React.Component }
 */
const Arrow = props => {
  const { _className, onClick } = props
  return (
    <div
      className={_className}
      onClick={onClick}>
      <i className='icon--leftarrow' />
    </div>
  )
}

/**
 * Partners component
 * @param { Object } props
 * @property { String } props.featuredImage
 * @property { String | Array } [props.modifier = '']
 * @return { React.Component }
 */
const Partners = props => {
  const { className } = props

  const modifiedClassNames = classNames('partners', className)

  const slides = () => {
    let result = []

    for (let i = 1; i <= 5; i++) {
      result.push(
        <div
          key={i}
          className='partners__partner'>
          <Image
            forceShow={true} // Have to force show because stupid slick carousel.
            className='partners__partner-image image-background'
            imageSrc={partnerImages[`p${i}`]} />
        </div>
      )
    }
    return result
  }

  return (
    <div className={modifiedClassNames}>
      <div className='partners__carousel-wrapper hidden-md-up'>
        <Slider
          className='partners__carousel'
          infinite
          autoplay
          initialSlide={1}
          prevArrow={<Arrow _className='partners__arrow-prev partners__arrow' />}
          nextArrow={<Arrow _className='partners__arrow-next partners__arrow' />}
          slidesToShow={3}
          speed={500}
          slidesToScroll={1}>
          {slides()}
        </Slider>
      </div>
      <div className='container visible-md-up'>
        <div className='partners__carousel-desktop'>
          {slides()}
        </div>
      </div>
    </div>
  )
}

/**
 * propTypes
 * @type { Object }
 */
Partners.propTypes = {
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ])
}

/**
 * defaultProps
 * @type { Object }
 */
Partners.defaultProps = {
  modifier: '',
  className: ''
}

/**
 *  @module Partners
 */
export default Partners
