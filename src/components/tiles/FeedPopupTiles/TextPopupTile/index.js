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
 *  @name TextPopupTile
 *  @param  {Object} props
 *  @return {React.Component}
 */
const TextPopupTile = props => {
  const {
    className,
    modifier,
    name,
    date,
    text
  } = props

  const modifiedClassNames = classNames('text-popup-tile', className, modifier)

  return (
    <div className={modifiedClassNames}>
      <div className='col-xs-8 col-xs-push-2 col-sm-10 col-sm-push-1 text-popup-tile__container'>
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
TextPopupTile.propTypes = {
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
  text: PropTypes.string
}

/**
 *  defaultProps
 *  @type {Object}
 */
TextPopupTile.defaultProps = {
  className: '',
  modifier: '',
  name: '',
  date: '',
  text: ''
}

/**
 *  @module TextPopupTile
 */
export default TextPopupTile
