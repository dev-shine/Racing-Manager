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
 *  @module TextButton
 */
import TextButton from 'components/buttons/TextButton'

/**
 *  @module OverviewCard
 */
import OverviewCard from 'components/cards/OverviewCard'

/**
 *  @module CarouselArrow
 */
import CarouselArrow from 'components/buttons/CarouselArrow'

/**
 *  @module debounce
 */
import debounce from 'utils/debounce'

/**
 *  @module Swiper
 */
import Swiper from 'react-id-swiper'
require('react-id-swiper/src/styles/scss/swiper.scss')

/**
 * dummy fn
 */
const noop = () => {}

/**
 *  swiperNamesOpts
 *  @type {Object}
 */
const swiperNamesOpts = {
  centeredSlides: true,
  freeMode: true,
  freeModeSticky: true,
  spaceBetween: 10,
  slidesPerView: 5,
  freeModeMomentumRatio: 0.2,
  grabCursor: true,
  slideToClickedSlide: true,
  breakpoints: {
    480: {
      slidesPerView: 1,
      spaceBetween: 5
    },
    720: {
      slidesPerView: 3,
      spaceBetween: 5
    }
  }
}

/**
 *  swiperHorseOpts
 *  @type {Object}
 */
const swiperHorseOpts = {
  centeredSlides: true,
  freeMode: true,
  freeModeSticky: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeModeMomentumRatio: 0.2,
  grabCursor: true,
  slideToClickedSlide: true,
  preventClicks: true,
  breakpoints: {
    720: {
      slidesPerView: 1,
      spaceBetween: 5
    },
    980: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 10
    }
  }
}

/**
 *  @class
 *  @name HeaderSection
 *  @extends {Component}
 */
class HeaderSection extends Component {
  /**
   *  @constructor
   */
  constructor (props) {
    super(props)

    // Bind custom fn
    this.onResize = this.onResize.bind(this)
    this.bindWindowResize = this.bindWindowResize.bind(this)
    this.unBindWindowResize = this.unBindWindowResize.bind(this)
    this.debouncedResize = debounce(this.onResize)
  }

  componentDidMount () {
    window.d = this.refs.swiperName
    this.bindWindowResize()
  }

  componentWillUnmount () {
    this.unBindWindowResize()
  }

  bindWindowResize () {
    window.addEventListener('resize', this.debouncedResize, false)
  }

  onResize () {
    if (this.refs.swiperName) {
      this.refs.swiperName.swiper.updateContainerSize()
    }

    if (this.refs.swiperHorse) {
      this.refs.swiperHorse.swiper.updateContainerSize()
    }
  }

  unBindWindowResize () {
    window.removeEventListener('resize', this.debouncedResize, false)
  }

  render () {
    const {
      className,
      modifier,
      title,
      headerButtonText,
      data
    } = this.props

    /**
     *  Class names for the container
     *  @type {String}
     */
    const modifiedClassNames = classNames('dashboard-header', className, modifier)

    return (
      <div className={modifiedClassNames}>
        <div className='dashboard-header__heading row-no-margin dashboard-header__section'>
          <div className='col-xs-6 align-middle'>
            <h1>
              {title}
            </h1>
          </div>
          <div className='col-xs-6 align-middle'>
            <TextButton
              className='dashboard-header__header-button'
              onClick={noop}
              modifier='md'
              text={headerButtonText}/>
          </div>
        </div>
        <div className='dashboard-header__items-carousel dashboard-header__section'>
          <Swiper
            ref='swiperName'
            className='dashboard-header__slider'
            {...swiperNamesOpts} >
            {
              data.map((child, index) => {
                return (
                  <div className='dashboard-header__slide' key={index}>
                    <h2>The quays horse</h2>
                  </div>
                )
              })
            }
          </Swiper>
          <CarouselArrow
            className='dashboard-header__arrow'
            modifier={['left', 'nobg', 'white']}
            iconModifier={['leftarrow']}
            onClick={() => { this.refs.swiperName.swiper.slidePrev() }}
          />
          <CarouselArrow
            className='dashboard-header__arrow'
            modifier={['right', 'nobg', 'white']}
            iconModifier={['rightarrow']}
            onClick={() => { this.refs.swiperName.swiper.slideNext() }}
          />
        </div>
        <div className='dashboard-header__items-list dashboard-header__section wave-bg-blue'>
          <Swiper
            ref='swiperHorse'
            className='dashboard-header__slider'
            {...swiperHorseOpts} >
            {
              data.map((child, index) => {
                return (
                  <div className='dashboard-header__slide' key={index}>
                    <OverviewCard
                      className='dashboard-header__slide-item' />
                  </div>
                )
              })
            }
          </Swiper>
          <CarouselArrow
            className='dashboard-header__arrow'
            modifier={['left', 'bottom', 'nobg', 'white']}
            iconModifier={['leftarrow']}
            onClick={() => { this.refs.swiperHorse.swiper.slidePrev() }}
          />
          <CarouselArrow
            className='dashboard-header__arrow'
            modifier={['right', 'bottom', 'nobg', 'white']}
            iconModifier={['rightarrow']}
            onClick={() => { this.refs.swiperHorse.swiper.slideNext() }}
          />
        </div>
      </div>
    )
  }
}

/**
 *  propTypes
 *  @type {Object}
 */
HeaderSection.propTypes = {
  title: PropTypes.string,
  headerButtonText: PropTypes.string,
  data: PropTypes.array
}

/**
 *  defaultProps
 *  @type {Object}
 */
HeaderSection.defaultProps = {
  title: 'your horses',
  headerButtonText: '+ add another horse',
  data: []
}

/**
 *  @module HeaderSection
 */
export default HeaderSection
