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
import SubmitPost from 'containers/horseOverview/SubmitPost'

/**
 *  @module AjaxLoader
 */
import AjaxLoader from 'components/ajaxloader'

/**
 *  @module FeedUpdatePopup
 */
import FeedUpdatePopup from 'components/popup/FeedUpdatePopup'

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

    // Initial state
    this.state = {
      tileIndex: null,
      showPopup: false
    }

    // Bind custom fns
    this.renderAjaxLoader = this.renderAjaxLoader.bind(this)
    this.showFeedTilePopup = this.showFeedTilePopup.bind(this)
    this.closePopup = this.closePopup.bind(this)
  }

  componentDidMount () {
    this.props.getHorseInfo()
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.posted !== nextProps.posted && nextProps.posted) {
      this.props.getHorseInfo()
    }
  }

  /**
   *  renderAjaxLoader
   *  @return {Component}
   */
  renderAjaxLoader () {
    if (this.props.posting || this.props.fetching) {
      return <AjaxLoader />
    }

    return null
  }

  /**
   *  showFeedTilePopup
   *  @param  {String} id
   */
  showFeedTilePopup (id) {
    if (!id) {
      return false
    }

    // Set the new tile's index
    this.setState({
      tileIndex: this.props.data.map(tile => tile.createdAt).indexOf(id),
      showPopup: true
    })
  }

  /**
   *  closePopup
   */
  closePopup () {
    this.setState({
      showPopup: false
    })
  }

  render () {
    const {
      data,
      match
    } = this.props

    const {
      showPopup,
      tileIndex
    } = this.state

    // Get the tile according to the passed in index.
    const popupTile = tileIndex >= 0 ? data[tileIndex] : null

    return (
      <div className='horse-overview'>
        <div className='container horse-overview__message-post'>
          <div className='row'>
            <div className='col-xs-12 col-sm-10 col-sm-push-1'>
              <SubmitPost
                horseId={match.params.name} />
            </div>
          </div>
        </div>
        <div className='horse-overview__grid container'>
          <TileGallery
            onClick={this.showFeedTilePopup}
            tiles={data}/>
        </div>
        { this.renderAjaxLoader() }
        <FeedUpdatePopup
          isOpen={showPopup}
          onClick={this.closePopup}
          tile={popupTile} />
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
    data,
    posting,
    fetching,
    posted
  } = horseoverview

  return {
    data,
    fetching,
    posting,
    posted
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
