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
    modifier
  } = props

  const modifiedClassNames = classNames('text-tile', className, modifier)

  return (
    <div className={`col-sm-3 ${modifiedClassNames}`}>
      <TileAuthor
        name='Nick the god'
        date='2 days ago' />
      <p className='text-tile__content tiny'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iudicante iuberet refugiendi, democritus brevi easque quaerat horrida infinitis. Imperitos litterae explicavi.
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
  ])
}

/**
 *  defaultProps
 *  @type {Object}
 */
TextTile.defaultProps = {
  className: '',
  modifier: ''
}

/**
 *  @module TextTile
 */
export default TextTile
