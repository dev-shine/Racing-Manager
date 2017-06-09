/**
 *  @module React
 */
import React, { Component } from 'react'

/**
 *  @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 *  @module classNames
 */
import classNames from 'utils/classnames'

/**
 * @module Slider
 */
import Slider from 'react-slick'

/**
 *  @module CarouselArrow
 */
import CarouselArrow from 'components/buttons/CarouselArrow'

/**
 *  @name  MediaTileContent
 *  @param  {Object} props
 *  @return {React.Component}
 */
class MediaTileContent extends Component {
  /**
   *  @constructor
   *  @param  {Object} props
   */
  constructor (props) {
    super(props)

    // Store the slider in a ref
    this.slideRef = null

    // Bind custom fns
    this.slidePrev = this.slidePrev.bind(this)
    this.slideNext = this.slideNext.bind(this)
  }

   /**
   *  slidePrev
   *  @description Slides to the previous slide in the carousel
   */
  slidePrev (event) {
    if (!this.slideRef) {
      return false
    }

    if (event) {
      event.stopPropagation()
    }

    this.slideRef.slickPrev()
  }

  /**
   *  slideNext
   *  @description Slides to the next slide in the carousel
   */
  slideNext (event) {
    if (!this.slideRef) {
      return false
    }

    if (event) {
      event.stopPropagation()
    }

    this.slideRef.slickNext()
  }

  render () {
    const {
      className,
      modifier,
      children
    } = this.props

    // Modified classnames for the container div.
    const modifiedClassNames = classNames('tile-media-content', className, modifier)

    return (
      <div className={modifiedClassNames}>
        <Slider
          ref={ref => { this.slideRef = ref }}
          className='tile-media-content__slider-wrapper'
          initialSlide={0}
          infinite={false}
          dots={false}
          fade={false}
          autoplay={false}
          slidesToShow={1}
          arrows={false}
          speed={400}
          slidesToScroll={1}>
          {
            children.map((child, index) => {
              return (
                <div className='tile-media-content__slidercontainer' key={index}>
                  {child}
                </div>
              )
            })
          }
        </Slider>
        <CarouselArrow className='tile-media-content__slider__arrow' modifier='left' onClick={this.slidePrev} />
        <CarouselArrow className='tile-media-content__slider__arrow' modifier='right' onClick={this.slideNext} />
      </div>
    )
  }
}

/**
 * propTypes
 *  @type {Object}
 */
MediaTileContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ])
}

/**
 *  defaultProps
 *  @type {Object}
 */
MediaTileContent.defaultProps = {
  className: ''
}

/**
 *  @module MediaTileContent
 */
export default MediaTileContent
