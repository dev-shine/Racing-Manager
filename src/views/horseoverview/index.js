/**
 *  @module react
 */
import React, { Component } from 'react'

/**
 * @module react-redux
 */
import { connect } from 'react-redux'

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
 *  @name HorseOverview
 *  @class
 *  @extends {Component}
 */
export class HorseOverview extends Component {
  /**
   *  @constructor
   */
  constructor (props) {
    super(props)

    this.state = {
      tiles: [{
        id: 0,
        number: 2
      },
      {
        id: 1,
        number: 1
      },
      {
        id: 2,
        number: 1
      },
      {
        id: 3,
        number: 1
      },
      {
        id: 4,
        number: 1
      },
      {
        id: 5,
        number: 1
      },
      {
        id: 6,
        number: 1
      },
      {
        id: 7,
        number: 2
      },
      {
        id: 8,
        number: 1
      }]
    }
  }

  render () {
    return (
      <div className='horse-overview'>
        <div className='horse-overview__grid container'>
          <Grid
            maxColumns={3}>
            { this.state.tiles.map(({id, number}, index) =>
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
        </div>
      </div>
    )
  }
}

/**
 *  mapStateToProps
 *  @param  {Object} state
 *  @param  {Object} ownProps
 *  @return {Object}
 */
const mapStateToProps = (state, ownProps) => {
  return {}
}

/**
 *  @name mapDispatchToProps
 *  @param  {Function} dispatch
 *  @param  {Object} ownProps
 *  @return {Object}
 */
const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

/**
 *  @module connect
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HorseOverview)
