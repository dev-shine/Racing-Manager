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
 *  @module baseTile
 */
import baseTile from 'components/tiles/BaseTile'

/**
 *  @name TextTile
 *  @param  {Object} props
 *  @return {React.Component}
 */
const TextTile = props => {
  const {
    className,
    modifier,
    name,
    date,
    text
  } = props

  const modifiedClassNames = classNames('text-tile', className, modifier)

  return (
    <div className={modifiedClassNames}>
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
TextTile.propTypes = {
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
TextTile.defaultProps = {
  className: '',
  modifier: '',
  name: '',
  date: '',
  text: ''
}

/**
 *  @module TextTile
 */
export default baseTile(TextTile)
