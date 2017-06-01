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

    // Debug stuff.
    this.generateBlock = this.generateBlock.bind(this)
  }

  generateBlock (id, number, index) {
    let Comp
    let rand = Math.round((Math.random() * (3 - 1) + 1))
    console.log(rand)
    if (rand === 1) {
      Comp = <TextTile
                name='Nick the god'
                date='2 days ago'
                text={`Lorem ipsum dolor sit amet, consectetur dfjdsLorem ipsum dolor sit amet, consectetur sdfjdsLorem ipsum dolor sit amet, consectetur adipisicing elit. Iudicante iuberet refugiendi, democritus brevi easque quaerat horrida infinitis. Imperitos litterae explicavi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iudicante iuberet refugiendi, democritus brevi easque quaerat horrida infinitis. Imperitos litterae explicavi.`} />
    } else
    if (rand === 2) {
      Comp = <VideoTile
                name='Nick dijarido'
                date='5 days ago'
                text={`Lorem ipsum cant remeber the rest...`}
                src=''/>
    } else {
      Comp = <ImageTile
        name='Andy Tree'
        date='5 days ago'
        text={`lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum`} />
    }

    return (
      <Block width={Math.round((Math.random() * (3 - 1) + 1)) === 1 ? 2 : 1} key={ id }>
        {Comp}
      </Block>
    )
  }

  render () {
    return (
      <Grid
        maxColumns={4}>
        { this.props.tiles.map(({id, number}, index) =>
          this.generateBlock(id, number, index)
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
