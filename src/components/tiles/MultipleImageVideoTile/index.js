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
import classNames from 'utils/classnames'

/**
 *  @module TileHeader
 */
import TileHeader from 'components/tiles/TileHeader'

/**
 *  @module TileFooter
 */
import TileFooter from 'components/tiles/TileFooter'

/**
 *  @module TileContent
 */
import TileContent from 'components/tiles/TileContent'

/**
 *  @module baseTile
 */
import baseTile from 'components/tiles/BaseTile'

/**
 *  @module TileImageContent
 */
import TileImageContent from 'components/tiles/TileImageContent'

/**
 *  @module TileVideoContent
 */
import TileVideoContent from 'components/tiles/TileVideoContent'

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
export const createSlides = (images, videos, rootPath) => {
  const imgArray = images.map(({path}, index) => {
    return (
      <div className='multiple-tile__slidercontainer' key={`img-${index}`}>
        <TileImageContent
          rootPath={rootPath}
          className='multiple-tile__slide'
          imageSrc={path}
          alt={'Horse racing'} />
      </div>
    )
  })

  const videoArray = videos.map(({path, thumbnail}, index) => {
    return (
      <div className='multiple-tile__slidercontainer' key={`video-${index}`}>
        <TileVideoContent
          rootPath={rootPath}
          className='multiple-tile__slide'
          poster={thumbnail}
          src={path}/>
      </div>
    )
  })

  return [...imgArray, ...videoArray]
}

/**
 *  @name MultipleTile
 *  @param  {Object} props
 *  @return {React.Component}
 */
const MultipleTile = props => {
  const {
    className,
    modifier,
    name,
    date,
    text,
    videos,
    images,
    rootPath
  } = props

  const modifiedClassNames = classNames('multiple-tile', className, modifier)

  return (
    <div className={modifiedClassNames}>
      <div className='multiple-tile__slider'>
        <Slider
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
          {createSlides(images, videos, rootPath)}
        </Slider>
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
  videos: PropTypes.array,
  images: PropTypes.array
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
