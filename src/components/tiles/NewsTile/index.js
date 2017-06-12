import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'utils/classnames'

import baseTile from 'components/tiles/BaseTile'
import TileHeader from 'components/tiles/FeedTiles/TileHeader'
import TileContent from 'components/tiles/FeedTiles/TileContent'
// import TileFooter from 'components/tiles/FeedTiles/TileFooter'

import TileImageContent from 'components/tiles/FeedTiles/TileImageContent'

const NewsTile = props => {
  const {
    className,
    modifier,
    name,
    date,
    text,
    src,
    rootPath
  } = props

  const modifiedClassNames = classNames('image-tile', className, modifier)

  return (
    <div className={modifiedClassNames}>
      <TileImageContent
        rootPath={rootPath}
        src={src}/>
      <TileHeader
        name={name}
        src={'123'}
        date={date} />
      <TileContent
        text={text}
      />
      <div>
        Read more
      </div>
    </div>
  )
}

NewsTile.propTypes = {
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

NewsTile.defaultProps = {
  className: '',
  modifier: '',
  name: '',
  date: '',
  text: '',
  src: ''
}

export default baseTile(NewsTile)
