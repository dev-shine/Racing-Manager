import React, { Component } from 'react'

import horseView from 'views/Horse/View'

import { connect } from 'react-redux'

import AjaxLoader from 'components/loaders/ajaxloader'

import HorseHero from 'components/horse/HorseHero'
import HorseNavBar from 'components/horse/HorseNavBar'

import FeedGallery from 'components/feed/FeedGallery'

import SubmitPost from 'containers/SubmitUpdateToHorse'

import { FadeIn } from 'components/animation'

export class HorseOverview extends Component {
  constructor (props) {
    super(props)
  }

  componentWillReceiveProps ({data}) {
    if (this.props.data.posted !== data.posted && data.posted) {
      this.props.getHorseInfo()
    }
  }

  render () {
    const {
      submitFeedData,
      data,
      match
    } = this.props

    const {
      posting
    } = submitFeedData

    const {
      _id,
      messages
    } = data

    return (
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
        <FadeIn>
          {posting && <AjaxLoader />}
        </FadeIn>
      </div>
    )
  }
}

const mapStateToProps = ({ horse }) => {
  return {
    submitFeedData: {
      ...horse.submitFeedData
    }
  }
}

export default horseView(connect(
  mapStateToProps,
  null
)(HorseOverview))
