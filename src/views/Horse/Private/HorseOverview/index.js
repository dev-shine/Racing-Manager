import React, { Component } from 'react'
import { connect } from 'react-redux'

import View from 'components/routing/View'
import capitalize from 'utils/capitalize'

import AjaxLoader from 'components/loaders/ajaxloader'
import { fetchHorseInfo, clearHorseData } from 'actions/horse'

import HorseHero from 'components/horse/HorseHero'
import HorseNavBar from 'components/horse/HorseNavBar'

import FeedGallery from 'components/tiles/FeedGallery'

import SubmitPost from 'containers/SubmitUpdateToHorse'

export class HorseOverview extends Component {
  componentDidMount () {
    this.props.getHorseInfo()
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.posted !== nextProps.posted && nextProps.posted) {
      this.props.getHorseInfo()
    }
  }

  componentWillUnmount () {
    this.props.clearHorseData()
  }

  render () {
    const {
      posting,
      fetching,
      data = {},
      match
    } = this.props

    const {
      _id,
      messages = []
    } = data

    return (
      <View title={capitalize(data.name)} notPrefixed>
        <div className='horse-overview'>
          <HorseHero
            data={data} />

          <HorseNavBar
            name={match.params.name} />

          <div className='container horse-overview__message-post'>
            <div className='row'>
              <h1 className='horse-overview__main-title horse-overview__update-title uppercase'>
                Updates
              </h1>
              <div className='col-xs-12 col-sm-10 col-sm-push-1'>
                <SubmitPost
                  title='post an update to the horse'
                  horseId={_id}
                  reducerName='horseFeedData'
                />
              </div>
            </div>
          </div>
          <div className='horse-overview__grid container'>
            <FeedGallery
              tiles={messages}
            />
          </div>
          {(posting || fetching) && <AjaxLoader />}
        </div>
      </View>
    )
  }
}

const mapStateToProps = ({ horse }) => {
  return {
    ...horse.horseInfo,
    ...horse.submitFeedData
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  getHorseInfo: () => {
    const name = ownProps.match.params.name
    return dispatch(fetchHorseInfo(name))
  },
  clearHorseData: () => {
    return dispatch(clearHorseData())
  }
})

export default (connect(
  mapStateToProps,
  mapDispatchToProps
)(HorseOverview))
