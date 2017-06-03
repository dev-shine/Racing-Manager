/**
 *  @module react
 */
import React, { Component } from 'react'

/**
 * @module react-redux
 */
import { connect } from 'react-redux'

/**
 *  @module TileGallery
 */
import TileGallery from 'components/tiles/FeedTiles/TileGallery'

/**
 *  @module FeedSubmitTile
 */
import FeedSubmitTile from 'components/tiles/FeedSubmitTile'

/**
 *  @module fetchHorseInfo
 */
import {
  fetchHorseInfo
} from 'actions/horseoverview'

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
  }

  componentDidMount () {
    this.props.getHorseInfo()
  }

  render () {
    const {
      data
    } = this.props

    return (
      <div className='horse-overview'>
        <div className='container horse-overview__message-post'>
          <div className='row'>
            <div className='col-xs-12 col-sm-10 col-sm-push-1'>
              <FeedSubmitTile />
            </div>
          </div>
        </div>
        <div className='horse-overview__grid container'>
          <TileGallery
            tiles={data}/>
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
const mapStateToProps = ({horseoverview}, ownProps) => {
  const {
    data
  } = horseoverview

  return {
    data
  }
}

/**
 *  @name mapDispatchToProps
 *  @param  {Function} dispatch
 *  @param  {Object} ownProps
 *  @return {Object}
 */
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getHorseInfo: () => {
      // Get the name of the horse from the url.
      const horseId = ownProps.match.params.name

      dispatch(fetchHorseInfo({ horseId }))
    }
  }
}

/**
 *  @module connect
 */
export default (connect(
  mapStateToProps,
  mapDispatchToProps
)(HorseOverview))
