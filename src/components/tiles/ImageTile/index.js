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
 *  @module baseTile
 */
import baseTile from 'components/tiles/BaseTile'

/**
 *  @module Image
 */
import Image from 'components/image'

/**
 *  @module horseRaceImg
 */
import { horseRaceImg } from 'assets/dummyassets'

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
    text
  } = props

  const modifiedClassNames = classNames('image-tile', className, modifier)

  return (
    <div className={modifiedClassNames}>
      <Image
        className='image-tile__image'
        imageSrc={horseRaceImg}
        alt={'Horse racing'} />
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
  text: PropTypes.string
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
  text: ''
}

/**
 *  @module ImageTile
 */
export default baseTile(ImageTile)
