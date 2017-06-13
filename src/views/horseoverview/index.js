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
import {
  fetchHorseInfo
} from 'actions/horseoverview'

import TextButton from 'components/buttons/TextButton'
import Separator from 'components/gui/Separator'
import { Link } from 'react-router-dom'
import Accordion from 'components/accordion/BaseAccordion'

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
    this.handleToggleDetails = this.handleToggleDetails.bind(this)
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
      tileIndex: this.props.data.map(tile => tile.createdAt).indexOf(id),
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

  handleToggleDetails () {
    this.setState((state) => ({
      showDetails: !state.showDetails
    }))
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
        <div className='horse-overview__header'>
          <div style={{ height: 130 }}>
            image
          </div>
          <div className='horse-overview__details container'>
            <h1 className='horse-overview__main-title'>
              tobefair
            </h1>
            <div className='horse-overview__owner'>
              7yo Bay Gelding Owned by: <Link to='/'>Down the Quay Club</Link>
            </div>
            <TextButton
              text='View details'
              className='horse-overview__view-details'
              modifier={['sm', 'secondary']}
              onClick={this.handleToggleDetails}
            />
          </div>
          <Accordion isOpen={this.state.showDetails}>
            <div className='container hidden-md-up'>
              <div className='col-xs-12'>
                <div className='col-xs-6'>
                  Trainer
                </div>
                <div className='col-xs-6'>
                  <Link to='/'>
                    Debra Hamer
                  </Link>
                </div>
              </div>
              <div className='col-xs-12'>
                <div className='col-xs-6'>
                  <Link to='/'>
                    Prev Trainers
                  </Link>
                </div>
                <div className='col-xs-6'>
                  Lucy Jones (17/05/15)
                </div>
              </div>
              <div className='col-xs-12'>
                <div className='col-xs-6'>
                  Breeder
                </div>
                <div className='col-xs-6'>
                  Mickley Stud
                </div>
              </div>
              <div className='col-xs-12'>
                <div className='col-xs-6'>
                  Style
                </div>
                <div className='col-xs-6'>
                  National Hunt (Jump)
                </div>
              </div>
              <div className='col-xs-12'>
                <div className='col-xs-6'>
                  Foaling Date
                </div>
                <div className='col-xs-6'>
                  8 July 2010
                </div>
              </div>
              <div className='col-xs-12'>
                <div className='col-xs-6'>
                  Sire
                </div>
                <div className='col-xs-6'>
                  <Link to='/'>
                    Central Park (IRE)
                  </Link>
                </div>
              </div>
              <div className='col-xs-12'>
                <div className='col-xs-6'>
                  Dam
                </div>
                <div className='col-xs-6'>
                  <Link to='/'>
                    Nan (GB)
                  </Link>
                </div>
              </div>
              <div className='col-xs-12'>
                <div className='col-xs-6'>
                  Dam Sire
                </div>
                <div className='col-xs-6'>
                  <Link to='/'>
                    Buckley (GB)
                  </Link>
                </div>
              </div>
              <div className='col-xs-12'>
                <div className='col-xs-6'>
                  Racetrack Siblings
                </div>
                <div className='col-xs-6'>
                  <Link to='/'>
                    See Pedigree Progeny Career
                  </Link>
                </div>
              </div>
              <div className='col-xs-12' style={{ marginTop: 15 }}>
                <div className='col-xs-6'>
                  Prize Money
                </div>
                <div className='col-xs-6'>
                  £47,211.52
                </div>
              </div>
              <div className='col-xs-12'>
                <div className='col-xs-6'>
                  Public Sales Price
                </div>
                <div className='col-xs-6'>
                  £18,000 (25/02/14)
                </div>
              </div>
              <div className='col-xs-12'>
                <div className='col-xs-6'>
                  Current Value
                </div>
                <div className='col-xs-6'>
                  £25,000
                </div>
              </div>
            </div>
            <div className='horse-overview__accordion container'>
              <div className='col-xs-12 col-md-7'>
                <h1 className='horse-overview__involvement-title'>
                  About the horse
                </h1>
                <Separator modifier='white' />
                <p>
                  Tobefair (9-1) took his winning streak to six with his best performance to date in the Pertemps Network Handicap Hurdle (Series Qualifier) at Warwick. Debra Hamer's seven-year-old started his rich vein of form with three victories in the summer of 2015 and was striking for the third time this term.
                </p>
                <Link to='/' className='link--italic horse-overview__read-more'>
                  Read more...
                </Link>
                <div className='horse-overview__small-title'>
                  Timeform comment
                </div>
                <p>
                  Jumps: sturdy gelding: useful handicap hurdler: won all 3 starts in 2015/16 and at Ffos Las in November, Chepstow in December, Warwick in January and Newbury (by 1½ lengths from Morello Royale) in February: 10/1, well below form in 24-runner Pertemps Final at Cheltenham last time: stays 3¼m: acts on soft and good to firm going: has worn cheekpieces, including latest start: often races towards rear, sometimes idles.
                </p>
                <Link to='/' className='link--italic horse-overview__read-more'>
                  Read more...
                </Link>
                <TextButton
                  text='Syndicate page'
                  className='horse-overview__syndicate-button'
                  onClick={() => {}}
                />
              </div>
              <div className='col-md-4 col-sm-offset-1 visible-md-up'>
                <h1 className='horse-overview__involvement-title'>
                  Your Involvement
                </h1>
                <Separator modifier='white' />
                <div className='horse-overview__small-title'>
                  Ownership
                </div>
                <ul className='disc-list'>
                  <li>2 years fixed period ownership</li>
                  <li>Ends on 02/04/2018</li>
                  <li>You own 5 shares out of 20 (25%)</li>
                </ul>
                <div className='horse-overview__small-title'>
                  Benefits
                </div>
                <ul className='disc-list'>
                  <li>Pro rata prize money share</li>
                  <li>Pro rata share of resale proceeds</li>
                  <li>Regular yard visits</li>
                  <li>Personalised messages and clips from the team</li>
                  <li>Live content from the races</li>
                </ul>
                <Link to='/' className='link--italic horse-overview__read-more'>
                  Read more...
                </Link>
              </div>
            </div>
          </Accordion>
          <div className='horse-overview__content'>
            <div className='container'>
              <div className='horse-overview__involvement'>
                <h1 className='horse-overview__involvement-title'>
                  Your Involvement
                </h1>
                <Separator modifier='white' />
                <div className='horse-overview__small-title'>
                  Ownership
                </div>
                <ul className='disc-list'>
                  <li>2 years fixed period ownership</li>
                  <li>Ends on 02/04/2018</li>
                  <li>You own 5 shares out of 20 (25%)</li>
                </ul>
                <Link to='/' className='link--italic horse-overview__read-more'>
                  Read more...
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='container horse-overview__message-post'>
          <div className='row'>
            <div className='col-xs-12 col-sm-10 col-sm-push-1'>
              <SubmitPost
                title='post an update to the horse'
                horseId={match.params.id} />
            </div>
          </div>
        </div>
        <div className='horse-overview__grid container'>
          <FeedGallery
            onClick={this.showFeedTilePopup}
            tiles={data}/>
        </div>
        { this.renderAjaxLoader() }
        <FeedUpdatePopup
          submitTitle='comment on this post'
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
      const horseId = ownProps.match.params.id

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
