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
export class PrivateHorse extends Component {
  /**
   *  @constructor
   */
  constructor (props) {
    super(props)

    // Bind custom fns
    this.renderAjaxLoader = this.renderAjaxLoader.bind(this)
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

  render () {
    const { data = {} } = this.props
    const { messages = [] } = data

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
                horseId={data._id} />
            </div>
          </div>
        </div>
        <div className='horse-overview__grid container'>
          <FeedGallery
            tiles={messages} />
        </div>
        { this.renderAjaxLoader() }
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
const mapStateToProps = ({ horseoverview }, ownProps) => {
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
)(PrivateHorse))
