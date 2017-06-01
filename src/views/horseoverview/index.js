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
import TileGallery from 'components/tiles/TileGallery'

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
        number: 1
      },
      {
        id: 8,
        number: 1
      }]
    }
  }

  componentDidMount () {
    let index = 9

    let interval = setInterval(() => {
      this.setState(state => ({
        tiles: [...state.tiles, {
          id: index,
          number: 1
        }]
      }))

      index++

      if (index >= 30) {
        clearInterval(interval)
      }
    }, 500)
  }

  render () {
    const {
      tiles
    } = this.state

    return (
      <div className='horse-overview'>
        <div className='horse-overview__grid container'>
          <TileGallery
            tiles={tiles}/>
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
  return {
  }
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
