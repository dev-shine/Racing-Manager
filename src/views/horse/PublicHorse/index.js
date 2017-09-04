import React, { Component } from 'react'
import { connect } from 'react-redux'

import View from 'components/routing/View'
import capitalize from 'utils/capitalize'

import AjaxLoader from 'components/loaders/ajaxloader'
import { fetchHorseInfo } from 'actions/horse'

import List from 'components/gui/List'
import TextButton from 'components/buttons/TextButton'

import HorseHero from 'components/horse/HorseHero'
import HorseAbout from 'components/horse/HorseAbout'
import HorseAvailability from 'components/horse/HorseAvailability'
import HorseTable from 'components/horse/HorseTable'
import HorseCard from 'components/horse/HorseCard'

import HorseParallaxContent from 'components/horse/HorseParallaxContent'
import HorseCtaCard from 'components/horse/HorseCtaCard'
import HorseMemberCarousel from 'components/horse/HorseMemberCarousel'

import SyndicateSplitSection from 'components/syndicate/SyndicateSplitSection'

import TitleDescriptionSection from 'components/common/TitleDescriptionSection'

import { calcPercent, constructStaticUrl } from 'utils/horseutils'
import { roundNumberWithoutZeros } from 'utils/number'

// mockup data
import {
  syndicateMembers,
  tableStatistics,
  racePlans,
  horseValue,
  benefitsList,
  horseHero,
  requestToJoin
} from 'data/horse'

import {
  availabilityList
} from 'data/horse/publicHorse'

class PublicHorse extends Component {
  componentDidMount () {
    this.props.getHorseInfo()
  }

  render () {
    const {
      posting,
      fetching,
      data = {},
      match
    } = this.props

    const {
      name,
      owner = {},
      description,
      shares = {
        owned: 0,
        total: 0
      },
      messages = []
    } = data

    const { name: ownerName, slug } = owner
    const syndicateLink = `/syndicate/${slug}`

    const eachShare = roundNumberWithoutZeros(
      calcPercent(1, shares.total)
    )

    const updatesInfo = (
      <p className='public-horse__updates-info'>
        There are {messages.length} updates associated with this horse. Request to join and get full access.
      </p>
    )

    return (
      <View title={capitalize(name)} notPrefixed>
        <div className='public-horse'>
          <HorseHero
            data={data} />

          <SyndicateSplitSection
            leftComponent={(
              <HorseAbout
                description={description}
                syndicateLink={syndicateLink} />
            )}
            rightComponent={(
              <div>
                <HorseAvailability
                  title='Availability'
                  availabilityList={availabilityList}>
                  {updatesInfo}
                </HorseAvailability>
                <div className='visible-md-up'>
                  <HorseCtaCard
                    url={`${window.location.origin}${match.url}`} />
                </div>
              </div>
            )} />

          <div className='container no-padding'>
            <div className='col-md-8 col-sm-12 public-horse__members-section'>
              <HorseMemberCarousel
                syndicateMembers={syndicateMembers} />
            </div>
          </div>

          <div className='public-horse__section container'>
            <HorseTable
              title='ranking'
              data={tableStatistics} />
          </div>

          <div className='public-horse__section container'>
            <div className='col-xs-12 col-md-7'>
              <TitleDescriptionSection
                title={racePlans.title}
                colorModifier='blue'>
                {racePlans.text}
              </TitleDescriptionSection>
            </div>
          </div>

          <HorseParallaxContent
            title={horseHero.title(ownerName)}
            image={horseHero.image}
          />

          <div className='public-horse__section container'>
            <div className='col-xs-12 col-md-7'>
              <TitleDescriptionSection
                title={horseValue.title}
                colorModifier='blue'>
                {horseValue.text}
              </TitleDescriptionSection>
            </div>
          </div>

          <div id="benefits-section" className='public-horse__footer-section wave-bg section-shadow'>
            <div className='container pos-relative'>
              <div className='public-horse__involvement-section col-xs-12 col-sm-6'>
                <TitleDescriptionSection
                title='Involvement'
                colorModifier='grey'>
                  <h4 className='uppercase'>
                    Benefits
                  </h4>
                  <p className='public-horse__benefits-description'>
                    For this filly we offer the following guarantee:  If due to injury or retirement, this filly's season is cut short and will not race again, and she has not raced at least twice, we will replace her with a similar horse for the remainder of the 2017 turf season. Please note that we are unable to pay prizemoney on any replacements and the replacement will be a horse of our own choosing.
                  </p>
                  <List items={benefitsList} className='public-horse__benefits-list' />
                  {updatesInfo}
                  <div className='public-horse__availability-section'>
                    <h4 className='uppercase'>
                      Availability
                    </h4>
                    <List items={availabilityList} />
                  </div>
                  <a href={requestToJoin} target='_blank'>
                    <TextButton
                      text='Request to join'
                      modifier='md'
                      className='public-horse__join-button'
                    />
                  </a>
                </TitleDescriptionSection>
              </div>
              <div className='public-horse__horse-section col-xs-12 col-sm-6'>
                <div className='public-horse__horse-card absolute-center'>
                  <HorseCard
                    isActive={true}
                    src={constructStaticUrl(data.thumbnailImage)}
                    title={data.name}
                    color={data.syndColor}
                    subtitle={`${data.age}yo ${data.gender}`}
                    stats={[{
                      name: 'runs',
                      value: data.runs
                    }, {
                      name: 'wins',
                      value: data.wins
                    }, {
                      name: 'places',
                      value: data.places
                    }, {
                      name: 'OR',
                      value: '-'
                    }]}
                    info={[{
                      name: 'Trainer name',
                      value: data.trainer && data.trainer.name
                    }, {
                      name: 'Syndicate name',
                      value: data.syndName
                    }, {
                      name: 'Initial cost/share',
                      value: '-'
                    }, {
                      name: 'Monthly cost/share',
                      value: '-'
                    }]}
                    extra={{
                      title: `${shares.owned} of ${shares.total} shares available`,
                      text: `*each share is equivalent to ${eachShare}%`
                    }}
                    isMember={false}
                    bottomUrl={null}
                    className='horse-card-gallery__card'
                  />
                </div>
              </div>
            </div>
          </div>
          {(posting || fetching) && <AjaxLoader />}
        </div>
      </View>
    )
  }
}

const mapStateToProps = ({ horse }) => ({
  ...horse.horseInfo,
  ...horse.submitFeedData
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  getHorseInfo: () => {
    const name = ownProps.match.params.name
    return dispatch(fetchHorseInfo(name))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PublicHorse)
