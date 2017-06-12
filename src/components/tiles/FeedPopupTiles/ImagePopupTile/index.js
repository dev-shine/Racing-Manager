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
import basePopupTile from 'components/tiles/common/BasePopupTile'

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
 *  @module TileImageContent
 */
import TileImageContent from 'components/tiles/common/TileImageContent'

/**
 *  @name ImagePopupTile
 *  @param  {Object} props
 *  @return {React.Component}
 */
const ImagePopupTile = props => {
  const {
    className,
    modifier,
    name,
    date,
    text,
    src,
    rootPath
  } = props

  const modifiedClassNames = classNames('image-popup-tile', className, modifier)

  return (
    <div className={modifiedClassNames}>
      <TileImageContent
        rootPath={rootPath}
        src={src}/>
      <div className='col-xs-12 col-sm-10 col-sm-push-1 image-popup-tile__container'>
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
ImagePopupTile.propTypes = {
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
ImagePopupTile.defaultProps = {
  className: '',
  modifier: '',
  name: '',
  date: '',
  text: '',
  src: ''
}

/**
 *  @module ImagePopupTile
 */
export default basePopupTile(ImagePopupTile)
