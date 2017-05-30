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

const TextTile = props => {
  const {
    className,
    modifier,
    name,
    date
  } = props

  const modifiedClassNames = classNames('text-tile', className, modifier)

  return (
    <div className={`col-sm-3 ${modifiedClassNames}`}>
      <TileAuthor
        name={name}
        date={date} />
      <p className='text-tile__content tiny'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iudicante iuberet refugiendi, democritus brevi easque quaerat horrida infinitis. Imperitos litterae explicavi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iudicante iuberet refugiendi, democritus brevi easque quaerat horrida infinitis. Imperitos litterae explicavi.ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
      </p>
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
  date: ''
}

/**
 *  @module TextTile
 */
export default TextTile
