/**
 * @module react
 */
import React, { Component } from 'react'

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
 *  @module TileVideoContent
 */
import TileVideoContent from 'components/tiles/common/TileVideoContent'

/**
 *  @module TileMediaContent
 */
import TileMediaContent from 'components/tiles/common/TileMediaContent'

/**
 *  @module TileSocialShare
 */
import TileSocialShare from 'components/tiles/common/TileSocialShare'

/**
 *  createSlides
 *  @param  {Array} images
 *  @param  {Array} videos
 *  @param  {String} rootPath
 *  @return {Array}
 */
export const createSlides = (attachments = [], rootPath) => {
  return attachments.map((attachment, index) => {
    if (attachment.type === 'video') {
      return (
        <div key={`mvideo-${index}`}>
          <TileVideoContent
            modifier={['no-margin-bottom']}
            rootPath={rootPath}
            poster={attachment.thumbnail}
            src={attachment.path}/>
        </div>
      )
    } else {
      return (
        <div key={`mimg-${index}`}>
          <TileImageContent
            modifier={['no-margin-bottom', 'video-aspect']}
            rootPath={rootPath}
            src={attachment.path}
            alt={'Horse racing'} />
        </div>
      )
    }
  })
}

/**
 *  @name MultipleTile
 *  @param  {Object} props
 *  @return {React.Component}
 */
class MultipleTile extends Component {
  /**
   *  @constructor
   *  @param  {Object} props
   */
  constructor (props) {
    super(props)
  }

  render () {
    const {
      className,
      modifier,
      name,
      date,
      text,
      attachments,
      rootPath
    } = this.props

    const modifiedClassNames = classNames('multiple-tile', className, modifier)

    return (
      <div className={modifiedClassNames}>
        <TileMediaContent>
          {createSlides(attachments, rootPath)}
        </TileMediaContent>
        <TileHeader
          name={name}
          date={date} />
        <TileContent
          text={text}/>
        <TileFooter/>
        <TileSocialShare
          shareText={text} />
      </div>
    )
  }
}

/**
 *  propTypes
 *  @type {Object}
 */
MultipleTile.propTypes = {
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
  src: PropTypes.string,
  attachments: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    path: PropTypes.string,
    thumbnail: PropTypes.string
  }))
}

/**
 *  defaultProps
 *  @type {Object}
 */
MultipleTile.defaultProps = {
  className: '',
  modifier: '',
  name: '',
  date: '',
  text: '',
  src: ''
}

/**
 *  @module MultipleTile
 */
export default baseTile(MultipleTile)
