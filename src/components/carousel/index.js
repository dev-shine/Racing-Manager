/**
 *  @module React
 */
import React, { Component } from 'react'

/**
 *  @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 *  @module debounce
 */
import debounce from 'utils/debounce'

/**
 *  @module omit
 */
import omit from 'utils/objectutils/omit'

/**
 *  @module classNames
 */
import classNames from 'utils/classnames'

/**
 *  @module Swiper
 */
import Swiper from 'react-id-swiper'
require('react-id-swiper/src/styles/scss/swiper.scss')

/**
 *  @class
 *  @name Carousel
 *  @extends {Component}
 */
class Carousel extends Component {
  constructor (props) {
    super(props)

    this.carousel = null

    // Bind custom fn
    this.onResize = this.onResize.bind(this)
    this.bindWindowResize = this.bindWindowResize.bind(this)
    this.unBindWindowResize = this.unBindWindowResize.bind(this)
    this.debouncedResize = debounce(this.onResize)
    this.next = this.next.bind(this)
    this.prev = this.prev.bind(this)
    this.renderNextArrow = this.renderNextArrow.bind(this)
    this.renderPrevArrow = this.renderPrevArrow.bind(this)
  }

  componentDidMount () {
    this.bindWindowResize()
  }

  componentWillUnmount () {
    this.unBindWindowResize()
  }

  bindWindowResize () {
    window.addEventListener('resize', this.debouncedResize, false)
  }

  onResize () {
    setTimeout(() => {
      if (this.carousel) {
        this.carousel.swiper.resizeFix()
      }
    }, 0)
  }

  unBindWindowResize () {
    window.removeEventListener('resize', this.debouncedResize, false)
  }

  next () {
    if (this.carousel) {
      this.carousel.swiper.slideNext()
    }
  }

  prev () {
    if (this.carousel) {
      this.carousel.swiper.slidePrev()
    }
  }

  renderNextArrow () {
    if (this.props.nextArrow) {
      return React.cloneElement(this.props.nextArrow)
    }

    return null
  }

  renderPrevArrow () {
    if (this.props.prevArrow) {
      return React.cloneElement(this.props.prevArrow)
    }

    return null
  }

  render () {
    const {
      sliderClassName,
      slideClassName,
      children
    } = this.props

    const swiperProps = omit(this.props, ['sliderClassName', 'slideClassName', 'children'])

    // Slider class names
    const sliderClassNames = classNames('slider', sliderClassName)

    // Slide class names
    const slideClassNames = classNames('slider__slide', slideClassName)

    return (
      <div>
        <Swiper
          ref={ref => { this.carousel = ref }}
          className={sliderClassNames}
          {...swiperProps}>
          {
            children.map((child, index) => {
              return (
                <div className={slideClassNames} key={index}>
                  {child}
                </div>
              )
            })
          }
        </Swiper>
        {this.renderNextArrow()}
        {this.renderPrevArrow()}
      </div>
    )
  }
}

/**
 *  propTypes
 *  @type {Object}
 */
Carousel.propTypes = {
  sliderClassName: PropTypes.string,
  slideClassName: PropTypes.string
}

/**
 *  defaultProps
 *  @type {Object}
 */
Carousel.defaultProps = {
  sliderClassName: '',
  slideClassName: ''
}

/**
 *  @module Carousel
 */
export default Carousel
