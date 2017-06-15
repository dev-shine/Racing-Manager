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
 *  @module Carousel
 */
import Carousel from 'components/carousel'

/**
 *  @module CarouselPaginationButton
 */
import CarouselPaginationButton from 'components/buttons/CarouselPaginationButton'

/**
 * dummy fn
 */
const noop = () => {}

/**
 *  swiperOpts
 *  @type {Object}
 */
const swiperOpts = {
  centeredSlides: true,
  spaceBetween: 30,
  slidesPerView: 'auto',
  grabCursor: true,
  slideToClickedSlide: true,
  breakpoints: {
    480: {
      spaceBetween: 10
    },
    780: {
      spaceBetween: 20
    }
  }
}

/**
 *  Gradiant
 *  @description Div block with a gradiant color.
 */
const Gradiant = props => {
  return (
    <div className='dashboard-header__gradiant' />
  )
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
          <div className='col-xs-8 col-sm-6 align-middle'>
            <h1>
              {title}
            </h1>
          </div>
          <div className='col-xs-4 col-sm-6 align-middle'>
            {/* Depending on screen width (mobile or desktop) show the correct button */}
            <TextButton
              className='dashboard-header__header-button visible-sm-up'
              onClick={noop}
              modifier='xs'
              text={headerButtonText}/>
            <TextButton
              className='dashboard-header__header-button hidden-sm-up'
              onClick={noop}
              modifier='xs'
              text='+'/>
          </div>
        </div>
        <div className='dashboard-header__items-carousel dashboard-header__section'>
          <Carousel
            ref='swiperName'
            slideClassName='dashboard-header__slide'
            prevArrow={
              <CarouselArrow
                className='dashboard-header__arrow'
                modifier={['left', 'nobg', 'white']}
                iconModifier={['leftarrow']}
                onClick={() => { this.refs.swiperName.prev() }}
              />
            }
            nextArrow={
              <CarouselArrow
                className='dashboard-header__arrow'
                modifier={['right', 'nobg', 'white']}
                iconModifier={['rightarrow']}
                onClick={() => { this.refs.swiperName.next() }}
              />
            }
            {...swiperOpts}>
            {
              data.map((child, index) => {
                return (
                  <h2
                    key={index}>
                    The quays horse<sup className='small'>2</sup>
                  </h2>
                )
              })
            }
          </Carousel>
        </div>
        <div className='dashboard-header__items-list dashboard-header__section wave-bg-blue'>
          <Gradiant />
          <Carousel
            slideClassName='dashboard-header__slide'
            ref='swiperHorse'
            prevArrow={
              <CarouselArrow
                className='dashboard-header__arrow visible-sm-up'
                modifier={['left', 'nobg', 'white', 'bottom']}
                iconModifier={['leftarrow']}
                onClick={() => { this.refs.swiperHorse.prev() }}
              />
            }
            nextArrow={
              <CarouselArrow
                className='dashboard-header__arrow visible-sm-up'
                modifier={['right', 'nobg', 'white', 'bottom']}
                iconModifier={['rightarrow']}
                onClick={() => { this.refs.swiperHorse.next() }}
              />
            }
            {...swiperOpts}>
            {
              data.map((child, index) => {
                return (
                  <OverviewCard
                    key={index}
                    className='dashboard-header__slide-item' />
                )
              })
            }
          </Carousel>
          <div className='dashboard-header__pagination hidden-sm-up'>
            <CarouselPaginationButton
              length={data.length}
              activeIndex={0} />
          </div>
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
