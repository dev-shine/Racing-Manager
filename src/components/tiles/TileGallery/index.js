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
import TextTile from 'components/tiles/TextTile'

/**
 *  @module ImageTiles
 */
import ImageTile from 'components/tiles/ImageTile'

/**
 *  @module VideoTile
 */
import VideoTile from 'components/tiles/VideoTile'

/**
 *  @module MultipleImageVideoTile
 */
import MultipleImageVideoTile from 'components/tiles/MultipleImageVideoTile'

/**
 *  @module Block, Grid
 */
import { Block, Grid } from 'components/masonry'

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
  }

  render () {
    const {
      tiles
    } = this.props

    return (
      <Grid
        maxColumns={4}>
        {
          tiles.map(tile => {
            return (
              <Block width={1} key={tile.createdAt}>
                <VideoTile
                  key={`tile-${tile.createdAt}`}
                  src={tile.video.length === 2 ? tile.video[1].path : ''}
                  images={tile.image}
                  videos={tile.video}
                  name='Andy Jones'
                  date={tile.createdAt}
                  text={tile.text} />
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
