import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import View from 'components/routing/View'
import capitalize from 'utils/capitalize'

import AjaxLoader from 'components/ajaxloader'
import { fetchHorseInfo } from 'actions/horse'

import Separator from 'components/gui/Separator'
import Table from 'components/gui/Table'
import List from 'components/gui/List'
import TextButton from 'components/buttons/TextButton'
import Carousel from 'components/carousel'

import HorseHeader from 'components/horse/HorseHeader'
import HorseTeamMember from 'components/horse/HorseTeamMember'
import HorseCard from 'components/cards/HorseCard'
import HorseHero from 'components/horse/HorseHero'

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
      data = {}
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

    const aboutSection = (
      <div>
        <h1>
          About the horse
        </h1>
        <Separator modifier='white' />
        <p>
          {description || 'No description ...'}
        </p>
        <Link to={syndicateLink}>
          <TextButton
            text='Syndicate page'
            modifier='md'
            className='horse-syndicate-btn'
          />
        </Link>
      </div>
    )

    const availabilitySection = (
      <div>
        <h2>
          Availability
        </h2>
        <Separator modifier='white' />
        <List items={availabilityList} />
        {updatesInfo}
        <HashLink to='#benefits-section' className='link link--italic public-horse__see-benefits'>
          See benefits
        </HashLink>
      </div>
    )

    const members = syndicateMembers.map((member, index) => (
      <HorseTeamMember
        key={index}
        image={member.image}
        name={member.name}
        role={member.role}
        description={member.description}
        className='public-horse__member-tile'
      />
    ))

    return (
      <View title={capitalize(name)} notPrefixed>
        <div className='public-horse'>
          <div className='public-horse__header'>
            <HorseHeader
              data={data}
              leftSection={(
                <div>
                  {aboutSection}
                  <div>
                    {/* members */}
                  </div>
                </div>
              )}
              rightSection={(
                <div>
                  {availabilitySection}
                  <div className='public-horse__buttons section-shadow section-shadow--tile section-shadow--bottom'>
                    <a href={requestToJoin} target='_blank'>
                      <TextButton
                        text='Request to join'
                        className='public-horse__button'
                        modifier='md'
                      />
                    </a>
                    <Link to='/'>
                      <TextButton
                        text='Get in touch'
                        className='public-horse__button'
                        modifier={['md', 'secondary']}
                      />
                    </Link>
                  </div>
                </div>
              )}
              slideSection={[
                aboutSection,
                availabilitySection
              ]}
            />
          </div>
          <div className='public-horse__section container hidden-md-up'>
            <Carousel
              containerClassName='public-horse__mobile-carousel'
              ref='carousel'
              slideWidth={0.33}
              cellAlign='left'
              breakPoints={{
                400: {
                  slideWidth: 1,
                  cellAlign: 'center'
                },
                480: {
                  slideWidth: 0.5
                }
              }}
              showArrows
            >
              {members}
            </Carousel>
          </div>
          <div className='public-horse__section container'>
            <h1>
              Statistics
            </h1>
            <Separator modifier='blue' />
            <Table {...tableStatistics} />
          </div>
          <div className='public-horse__section container'>
            <div className='col-xs-12 col-md-7 no-padding'>
              <h1>
                {racePlans.title}
              </h1>
              <Separator modifier='blue' />
              <div>
                {racePlans.text}
              </div>
            </div>
          </div>
          <HorseHero
            title={horseHero.title(ownerName)}
            image={horseHero.image}
          />
          <div className='public-horse__section container'>
            <div className='col-xs-12 col-md-7 no-padding'>
              <h1>
                {horseValue.title}
              </h1>
              <Separator modifier='blue' />
              <div>
                {horseValue.text}
              </div>
            </div>
          </div>
          <div id="benefits-section" className='public-horse__footer-section wave-bg section-shadow'>
            <div className='container pos-relative'>
              <div className='public-horse__involvement-section col-xs-12 col-sm-6'>
                <h1>
                  Involvement
                </h1>
                <Separator modifier='grey' />
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
              </div>
              <div className='public-horse__horse-section col-xs-12 col-sm-6'>
                {/* TODO: Update horse card */}
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
