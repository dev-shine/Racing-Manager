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
import TileHeader from 'components/tiles/common/TileHeader'

/**
 *  @module TileFooter
 */
import TileFooter from 'components/tiles/common/TileFooter'

/**
 *  @module TileContent
 */
import TileContent from 'components/tiles/common/TileContent'

/**
 *  @module baseTile
 */
import baseTile from 'components/tiles/common/BaseTile'

/**
 *  @module TileImageContent
 */
import TileImageContent from 'components/tiles/common/TileImageContent'

/**
 *  @module TileSocialShare
 */
import TileSocialShare from 'components/tiles/common/TileSocialShare'

/**
 *  @name ImageTile
 *  @param  {Object} props
 *  @return {React.Component}
 */
const ImageTile = props => {
  const {
    className,
    modifier,
    name,
    date,
    text,
    src,
    rootPath,
    showSocial,
    hideSocialSharing,
    showSocialSharing
  } = props

  const modifiedClassNames = classNames('image-tile', className, modifier)

  return (
    <div className={modifiedClassNames}>
      <TileImageContent
        rootPath={rootPath}
        src={src}/>
      <TileHeader
        name={name}
        date={date} />
      <TileContent
        text={text}/>
      <TileFooter
        onSocialShare={showSocialSharing} />
      <TileSocialShare
        show={showSocial}
        onClose={hideSocialSharing}
        shareText={text} />
    </div>
  )
}

/**
 *  propTypes
 *  @type {Object}
 */
ImageTile.propTypes = {
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
ImageTile.defaultProps = {
  className: '',
  modifier: '',
  name: '',
  date: '',
  text: '',
  src: ''
}

/**
 *  @module ImageTile
 */
export default baseTile(ImageTile)
