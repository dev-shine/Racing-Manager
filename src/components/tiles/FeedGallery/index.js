/**
 *  @module react
 */
import React, { Component } from 'react'

/**
 *  @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 *  @module TextTile
 */
import TextTile from 'components/tiles/FeedTiles/TextTile'

/**
 *  @module ImageTiles
 */
import ImageTile from 'components/tiles/FeedTiles/ImageTile'

/**
 *  @module VideoTile
 */
import VideoTile from 'components/tiles/FeedTiles/VideoTile'

/**
 *  @module MediaCarouselTile
 */
import MediaCarouselTile from 'components/tiles/FeedTiles/MediaCarouselTile'

/**
 *  @module Block, Grid
 */
import { Block, Grid } from 'components/masonry'

/**
 *  @class
 *  @name FeedGallery
 *  @extends { Component }
 */
class FeedGallery extends Component {
  /**
   *  @constructor
   *  @param  {Object} props
   */
  constructor (props) {
    super(props)

    // Bind this
    this.renderChildren = this.renderChildren.bind(this)
  }

  /**
   *  renderChildren
   *  @param  {Object} tile
   *  @return {Component}
   */
  renderChildren (tile) {
    const {
      postType,
      createdAt,
      timeStamp,
      text,
      attachment
    } = tile

    const {
      onClick
    } = this.props

    // Switch between the post type.
    switch (postType) {
      case 'text':
        return (
          <TextTile
            key={`text-${createdAt}`}
            id={createdAt}
            name='Andy Jones'
            date={timeStamp}
            text={text}
            onClick={onClick} />
        )

      case 'multiplemedia':
        return (
          <MediaCarouselTile
            key={`iv-${createdAt}`}
            id={createdAt}
            name='Andy Jones'
            date={timeStamp}
            text={text}
            attachments={attachment}
            onClick={onClick} />
        )

      case 'image':
        return (
          <ImageTile
            key={`image-${createdAt}`}
            id={createdAt}
            src={attachment[0].path}
            name='Andy Jones'
            date={timeStamp}
            text={text}
            onClick={onClick} />
        )

      case 'video':
        return (
          <VideoTile
            key={`video-${createdAt}`}
            id={createdAt}
            src={attachment[0].path}
            poster={attachment[0].thumbnail}
            name='Andy Jones'
            date={timeStamp}
            text={text}
            onClick={onClick} />
        )
    }
  }

  render () {
    const {
      tiles
    } = this.props

    return (
      <Grid
        targetBlockWidth={265}
        center={false}
        maxColumns={4}>
        {
          tiles.map(tile => {
            return (
              <Block width={1} key={tile.createdAt}>
                {this.renderChildren(tile)}
              </Block>
            )
          })
        }
      </Grid>
    )
  }
}

/**
 *  propTypes
 *  @type {Object}
 */
FeedGallery.propTypes = {
  tiles: PropTypes.array,
  onClick: PropTypes.func
}

/**
 *  defaultProps
 *  @type {Object}
 */
FeedGallery.defaultProps = {
  tiles: []
}

/**
 *  @module FeedGallery
 */
export default FeedGallery
