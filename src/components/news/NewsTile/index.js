import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'utils/classnames'

import baseTile from 'components/tiles/BaseTile'
import TileImageContent from 'components/tiles/TileImageContent'
import TileHeaderProvider from 'components/tiles/TileHeaderProvider'
import TileContent from 'components/tiles/TileContent'
import TileReadMore from 'components/tiles/TileReadMore'

import { timestampToFeedTimestamp } from 'utils/dateutils'

const NewsTile = props => {
  const {
    className,
    modifier,
    name,
    date,
    text,
    src,
    providerSrc,
    rootPath
  } = props

  const modifiedClassNames = classNames('news-tile', className, modifier)

  return (
    <div className={modifiedClassNames}>
      <TileImageContent
        rootPath={rootPath}
        src={src}
      />
      <TileHeaderProvider
        name={name}
        src={providerSrc}
        date={timestampToFeedTimestamp(date)}
      />
      <TileContent
        text={text}
        className='news-tile__title'
      />
      <TileReadMore />
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
