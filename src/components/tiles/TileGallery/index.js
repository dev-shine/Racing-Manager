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
    return (
      <Grid
        maxColumns={3}>
        { this.props.tiles.map(({id, number}, index) =>
          <Block width={number} key={ id }>
            {
            number === 1
            ? <TextTile
                name='Nick the god'
                date='2 days ago'
                text={`Lorem ipsum dolor sit amet, consectetur dfjdsLorem ipsum dolor sit amet, consectetur sdfjdsLorem ipsum dolor sit amet, consectetur adipisicing elit. Iudicante iuberet refugiendi, democritus brevi easque quaerat horrida infinitis. Imperitos litterae explicavi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iudicante iuberet refugiendi, democritus brevi easque quaerat horrida infinitis. Imperitos litterae explicavi.`} />
            : <ImageTile
                name='Andy Tree'
                date='5 days ago'
                text={`lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum`} />
            }
          </Block>
        )}
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
