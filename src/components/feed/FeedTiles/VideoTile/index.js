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
 *  @module TileVideoContent
 */
import TileVideoContent from 'components/tiles/TileVideoContent'

/**
 *  @module TileSocialShare
 */
import TileSocialShare from 'components/tiles/TileSocialShare'

/**
 *  @name VideoTile
 *  @param  {Object} props
 *  @return {React.Component}
 */
const VideoTile = props => {
  const {
    className,
    modifier,
    name,
    date,
    text,
    poster,
    src,
    rootPath,
    showSocial,
    hideSocialSharing,
    showSocialSharing
  } = props

  const modifiedClassNames = classNames('video-tile', className, modifier)

  return (
    <div className={modifiedClassNames}>
      <TileVideoContent
        poster={poster}
        src={src}
        rootPath={rootPath} />
      <TileHeader
        name={name}
        date={date} />
      <TileContent
        text={text}/>
      <TileFooter
        onSocialShare={showSocialSharing} />
      <TileSocialShare
        onClose={hideSocialSharing}
        show={showSocial}
        shareText={text} />
    </div>
  )
}

/**
 *  propTypes
 *  @type {Object}
 */
VideoTile.propTypes = {
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
VideoTile.defaultProps = {
  className: '',
  modifier: '',
  name: '',
  date: '',
  text: '',
  src: '',
  poster: ''
}

/**
 *  @module VideoTile
 */
export default baseTile(VideoTile)
