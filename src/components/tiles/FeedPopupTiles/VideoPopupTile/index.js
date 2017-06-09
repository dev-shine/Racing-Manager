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
 *  @module basePopupTile
 */
import basePopupTile from 'components/tiles/BasePopupTile'

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
 *  @module TileVideoContent
 */
import TileVideoContent from 'components/tiles/FeedTiles/TileVideoContent'

/**
 *  @name VideoPopupTile
 *  @param  {Object} props
 *  @return {React.Component}
 */
const VideoPopupTile = props => {
  const {
    className,
    modifier,
    name,
    date,
    text,
    poster,
    src,
    rootPath
  } = props

  const modifiedClassNames = classNames('video-popup-tile', className, modifier)

  return (
    <div className={modifiedClassNames}>
      <TileVideoContent
        poster={poster}
        src={src}
        rootPath={rootPath} />
      <div className='col-xs-8 col-xs-push-2 col-sm-10 col-sm-push-1 video-popup-tile__container'>
        <TileHeader
          name={name}
          date={date} />
        <TileContent
          text={text}/>
        <TileFooter/>
      </div>
    </div>
  )
}

/**
 *  propTypes
 *  @type {Object}
 */
VideoPopupTile.propTypes = {
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
  src: PropTypes.string
}

/**
 *  defaultProps
 *  @type {Object}
 */
VideoPopupTile.defaultProps = {
  className: '',
  modifier: '',
  name: '',
  date: '',
  text: '',
  src: '',
  poster: ''
}

/**
 *  @module VideoPopupTile
 */
export default basePopupTile(VideoPopupTile)
