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
// import MediaCarouselTile from 'components/tiles/FeedTiles/MediaCarouselTile'

/**
 *  @module Block, Grid
 */
// import { Block, Grid } from 'components/masonry'
import StackGrid from 'react-stack-grid'

/**
 *  @class
 *  @name TileGallery
 *  @extends { Component }
 */
class TileGallery extends Component {
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
    // Render plain text tile.
    if (tile.attachment.length <= 0) {
      return (
        <TextTile
          key={`text-${tile.createdAt}`}
          name='Andy Jones'
          date={tile.createdAt}
          text={tile.text} />
      )
    }

    // Media carousel is messed up for the minute, damn SLiCK CAROUSEL
    /*
      // Render media carousel tile.
      if (tile.attachment.length >= 2) {
        return (
          <MediaCarouselTile
            key={`media-${tile.createdAt}`}
            attachments={tile.attachment}
            name='Andy Jones'
            date={tile.createdAt}
            text={tile.text} />
        )
      }
    */

    // Render image tile.
    if (tile.attachment.length && tile.attachment[0].type === 'image') {
      return (
        <ImageTile
          key={`image-${tile.createdAt}`}
          src={tile.attachment[0].path}
          name='Andy Jones'
          date={tile.createdAt}
          text={tile.text} />
      )
    }

    // Render video tile.
    if (tile.attachment.length && tile.attachment[0].type === 'video') {
      return (
        <VideoTile
          key={`video-${tile.createdAt}`}
          src={tile.attachment[0].path}
          poster={tile.attachment[0].thumbnail}
          name='Andy Jones'
          date={tile.createdAt}
          text={tile.text} />
      )
    }
  }

  render () {
    const {
      tiles
    } = this.props

    return (
      <StackGrid
        duration={200}
        columnWidth={265}
        gutterWidth={20}
        gutterHeight={20}>
        {
          tiles.map(tile => {
            return (
              this.renderChildren(tile)
            )
          })
        }
      </StackGrid>
    )
    /*
      return (
      <Grid
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
    */
  }
}

/**
 *  propTypes
 *  @type {Object}
 */
TileGallery.propTypes = {
  tiles: PropTypes.array
}

/**
 *  defaultProps
 *  @type {Object}
 */
TileGallery.defaultProps = {
  tiles: []
}

/**
 *  @module TileGallery
 */
export default TileGallery
