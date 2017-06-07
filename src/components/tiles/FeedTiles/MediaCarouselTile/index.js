/**
 * @module react
 */
import React, { Component } from 'react'

/**
 * @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 * @module classNames
 */
import classNames from 'utils/classnames'

/**
 *  @module baseClassNames
 */
import baseClassNames from 'classnames'

/**
 *  @module TileHeader
 */
import TileHeader from 'components/tiles/FeedTiles/TileHeader'

/**
 *  @module TileFooter
 */
import TileFooter from 'components/tiles/FeedTiles/TileFooter'

/**
 *  @module TileContent
 */
import TileContent from 'components/tiles/FeedTiles/TileContent'

/**
 *  @module baseTile
 */
import baseTile from 'components/tiles/BaseTile'

/**
 *  @module TileImageContent
 */
import TileImageContent from 'components/tiles/FeedTiles/TileImageContent'

/**
 *  @module TileVideoContent
 */
import TileVideoContent from 'components/tiles/FeedTiles/TileVideoContent'

/**
 * @module Slider
 */
import Slider from 'react-slick'

/**
 *  createSlides
 *  @param  {Array} images
 *  @param  {Array} videos
 *  @param  {String} rootPath
 *  @return {Array}
 */
export const createSlides = (attachments = [], rootPath) => {
  return attachments.map((attachment, index) => {
    if (attachment.type === 'video') {
      return (
        <div className='multiple-tile__slidercontainer' key={`mvideo-${index}`}>
          <TileVideoContent
            rootPath={rootPath}
            className='multiple-tile__slide'
            poster={attachment.thumbnail}
            src={attachment.path}/>
        </div>
      )
    } else {
      return (
        <div className='multiple-tile__slidercontainer' key={`mimg-${index}`}>
          <TileImageContent
            rootPath={rootPath}
            className='multiple-tile__slide'
            src={attachment.path}
            alt={'Horse racing'} />
        </div>
      )
    }
  })
}

/**
 *  SlideArrow
 *  @param  {String} options.className
 *  @param  {String} options.modifier
 *  @param  {Function} options.onClick
 *  @return {Component}
 */
const SlideArrow = ({className, modifier, onClick}) => {
  // class names for the container
  const modifiedClassNames = classNames('multiple-tile__slider__arrow', className, modifier)

  // classnames for determining the correct arrow to show.
  const arrowClassNames = baseClassNames({
    'icon--leftarrow': modifier === 'left',
    'icon--rightarrow': modifier === 'right'
  })

  return (
    <div className={modifiedClassNames} onClick={onClick}>
      <span className={arrowClassNames}></span>
    </div>
  )
}

/**
 *  @name MultipleTile
 *  @param  {Object} props
 *  @return {React.Component}
 */
class MultipleTile extends Component {
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
  slidePrev () {
    if (!this.slideRef) {
      return false
    }

    this.slideRef.slickPrev()
  }

  /**
   *  slideNext
   *  @description Slides to the next slide in the carousel
   */
  slideNext () {
    if (!this.slideRef) {
      return false
    }

    this.slideRef.slickNext()
  }

  render () {
    const {
      className,
      modifier,
      name,
      date,
      text,
      attachments,
      rootPath
    } = this.props

    const modifiedClassNames = classNames('multiple-tile', className, modifier)

    return (
      <div className={modifiedClassNames}>
        <div className='multiple-tile__slider'>
          <Slider
            ref={ref => { this.slideRef = ref }}
            className='multiple-tile__slider-wrapper'
            initialSlide={0}
            infinite={false}
            dots={false}
            fade={false}
            autoplay={false}
            slidesToShow={1}
            arrows={false}
            speed={400}
            slidesToScroll={1}>
            {createSlides(attachments, rootPath)}
          </Slider>
          <SlideArrow modifier='left' onClick={this.slidePrev} />
          <SlideArrow modifier='right' onClick={this.slideNext} />
        </div>
        <TileHeader
          name={name}
          date={date} />
        <TileContent
          text={text}/>
        <TileFooter/>
      </div>
    )
  }
}

/**
 *  propTypes
 *  @type {Object}
 */
MultipleTile.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  name: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
  src: PropTypes.string,
  attachments: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    path: PropTypes.string,
    thumbnail: PropTypes.string
  }))
}

/**
 *  defaultProps
 *  @type {Object}
 */
MultipleTile.defaultProps = {
  className: '',
  modifier: '',
  name: '',
  date: '',
  text: '',
  src: ''
}

/**
 *  @module MultipleTile
 */
export default baseTile(MultipleTile)
