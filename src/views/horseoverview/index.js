/**
 *  @module react
 */
import React, { Component } from 'react'

/**
 * @module react-redux
 */
import { connect } from 'react-redux'

/**
 *  @module FeedGallery
 */
import FeedGallery from 'components/tiles/FeedGallery'

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
import { fetchHorseInfo } from 'actions/horseoverview'

/**
 * @module HorseHeader
 */
import HorseHeader from 'components/horse/HorseHeader'

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
      showPopup: false,
      showDetails: true
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
   *  @description Will get the correct index in the data array of the selected tile
   *               Will set the popup to be true.
   *  @param  {String} id
   */
  showFeedTilePopup (id) {
    if (!id) {
      return false
    }

    // Set the new tile's index
    this.setState({
      tileIndex: this.props.data.messages.map(tile => tile.createdAt).indexOf(id),
      showPopup: true
    })
  }

  /**
   *  closePopup
   *  @description Will hide the popup by setting the showPopup to false
   */
  closePopup () {
    this.setState({
      showPopup: false
    })
  }

  render () {
    const { showPopup, tileIndex } = this.state
    const { data = {}, match } = this.props
    const { messages } = data

    // Get the tile according to the passed in index.
    // const popupTile = tileIndex >= 0 ? data[tileIndex] : null

    return (
      <div className='horse-overview'>
        <HorseHeader data={data} />
        <div className='container horse-overview__message-post'>
          <div className='row'>
            <h1 className='horse-overview__main-title horse-overview__update-title'>
              Updates
            </h1>
            <div className='col-xs-12 col-sm-10 col-sm-push-1'>
              <SubmitPost
                title='post an update to the horse'
                horseId={match.params.name} />
            </div>
          </div>
        </div>
        <div className='horse-overview__grid container'>
          <FeedGallery
            onClick={this.showFeedTilePopup}
            tiles={messages} />
        </div>
        { this.renderAjaxLoader() }
        <FeedUpdatePopup
          submitTitle='comment on this post'
          isOpen={showPopup}
          onClick={this.closePopup}
          tile={tileIndex} />
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
      const name = ownProps.match.params.name
      dispatch(fetchHorseInfo({ name }))
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
