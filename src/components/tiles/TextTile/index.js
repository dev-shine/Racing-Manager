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
 *  @module TileAuthor
 */
import TileAuthor from 'components/tiles/TileAuthor'

/**
 *  @module TileSocial
 */
import TileSocial from 'components/tiles/TileSocial'

/**
 *  @module TileContent
 */
import TileContent from 'components/tiles/TileContent'

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
    <div className={`col-sm-3 ${modifiedClassNames}`}>
      <TileAuthor
        name={name}
        date={date} />
      <TileContent
        text={text}/>
      <TileSocial/>
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
export default TextTile
