import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import View from 'components/routing/View'
import capitalize from 'utils/capitalize'

import AjaxLoader from 'components/ajaxloader'
import { fetchHorseInfo } from 'actions/horse'

import Table from 'components/gui/Table'
import List from 'components/gui/List'
import TextButton from 'components/buttons/TextButton'
import Separator from 'components/gui/Separator'

import HorseHeader from 'components/horse/HorseHeader'
import HorseAccordion from 'components/horse/HorseAccordion'
import HorseTeamMember from 'components/horse/HorseTeamMember'

import FeedGallery from 'components/tiles/FeedGallery'

import SubmitPost from 'containers/submitUpdateToHorse'

import { timestampToDate } from 'utils/dateutils'
import { calcPercent } from 'utils/horseutils'
import { roundNumberWithoutZeros } from 'utils/number'

// mockup data
import {
  syndicateMembers,
  tableStatistics,
  tableEntries,
  tableResults,
  racePlans,
  horseValue,
  benefitsList
} from 'data/horse'

export class PrivateHorse extends Component {
  componentDidMount () {
    this.props.getHorseInfo()
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.posted !== nextProps.posted && nextProps.posted) {
      this.props.getHorseInfo()
    }
  }

  render () {
    const {
      posting,
      fetching,
      data = {}
    } = this.props

    const {
      _id,
      description,
      owner = {},
      shares = {},
      timeformComments = {},
      messages = []
    } = data

    const { slug } = owner
    const syndicateLink = `/syndicate/${slug}`

    const ownershipYears = 2
    const ownershipEndDate = timestampToDate(
      new Date(new Date().setFullYear(new Date().getFullYear() + ownershipYears))
    )

    const percentShares = roundNumberWithoutZeros(
      calcPercent(shares.owned, shares.total)
    )

    const aboutSection = (
      <div>
        <h1>
          About the horse
        </h1>
        <Separator modifier='white' />
        <div>
          <p className='horse-header__paragraph'>
            {description || 'No description ...'}
          </p>
        </div>
        <h4 className='horse-header__timeford-title uppercase'>
          Timeform comment
        </h4>
        {(!timeformComments.flat && !timeformComments.jump) && (
          <p className='horse-header__paragraph'>
            No timeform comments..
          </p>
        )}
        {timeformComments.flat && (
          <p className='horse-header__paragraph'>
            Flat: {timeformComments.flat}
          </p>
        )}
        {timeformComments.jump && (
          <p className='horse-header__paragraph'>
            Jump: {timeformComments.jump}
          </p>
        )}
        <Link to={syndicateLink}>
          <TextButton
            text='Syndicate page'
            modifier='md'
            className='horse-syndicate-btn'
          />
        </Link>
      </div>
    )

    const involvementSection = (
      <div>
        <h2>
          Your Involvement
        </h2>
        <Separator modifier='white' />
        <div>
          <h4 className='uppercase'>
            Ownership
          </h4>
          <List items={[
            `${ownershipYears} years fixed period ownership`,
            `Ends on ${ownershipEndDate}`,
            `You own ${percentShares}% shares (${shares.owned} out of ${shares.total})`,
          ]} />
          <h4 className='uppercase private-horse__benefits-title'>
            Benefits
          </h4>
          <List items={benefitsList} />
        </div>
      </div>
    )

    return (
      <View title={capitalize(data.name)} notPrefixed>
        <div className='horse-overview'>
          <HorseHeader
            data={data}
            leftSection={aboutSection}
            rightSection={involvementSection}
            slideSection={[
              aboutSection,
              involvementSection
            ]}
          />
          <div className='horse-accordions'>
            <HorseAccordion title='The Team'>
              <div className='horse-accordions__content container'>
                {
                  syndicateMembers.map((member, index) => (
                    <div key={index} className='col-xs-6 col-sm-3 col-md-2'>
                      <HorseTeamMember
                        className='horse-accordions__member'
                        {...member}
                      />
                    </div>
                  ))
                }
              </div>
            </HorseAccordion>
            <HorseAccordion title='Racing History'>
              <div className='horse-accordions__content container'>
                <h1>
                  Statistics
                </h1>
                <Separator modifier='blue' />
                <Table {...tableStatistics} />
                <h1 className='horse-accordions__middle-title'>
                  Future entries
                </h1>
                <Separator modifier='blue' />
                <Table {...tableEntries} />
                <h1 className='horse-accordions__middle-title'>
                  Results
                </h1>
                <Separator modifier='blue' />
                <Table {...tableResults} />
              </div>
            </HorseAccordion>
            <HorseAccordion title='Racing plans'>
              <div className='horse-accordions__content container'>
                <div className='col-xs-12 col-md-7'>
                  <div className='horse-header__text-section'>
                    <h1>
                      {racePlans.title}
                    </h1>
                    <Separator modifier='blue' />
                    <div>
                      {racePlans.text}
                    </div>
                  </div>
                  <div className='horse-header__text-section'>
                    <h1>
                      {horseValue.title}
                    </h1>
                    <Separator modifier='blue' />
                    <div>
                      {horseValue.text}
                    </div>
                  </div>
                </div>
              </div>
            </HorseAccordion>
          </div>
          <div className='container horse-overview__message-post'>
            <div className='row'>
              <h1 className='horse-overview__main-title horse-overview__update-title'>
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
  }
})

export default (connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateHorse))
