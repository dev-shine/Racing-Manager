import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import View from 'components/common/View'
import titleize from 'titleize'

import AjaxLoader from 'components/ajaxloader'
import { fetchHorseInfo } from 'actions/horse'

import Image from 'components/image'
// import Hero from 'components/parallax/Hero'
import Separator from 'components/gui/Separator'
import Table from 'components/gui/Table'
import List from 'components/gui/List'
import TextButton from 'components/buttons/TextButton'
import Carousel from 'components/carousel'

import HorseBigSection from 'components/horse/HorseBigSection'
import HorseSmallSection from 'components/horse/HorseSmallSection'

import HorseHeader from 'components/horse/HorseHeader'
import HorseTeamMember from 'components/horse/HorseTeamMember'
import HorseCard from 'components/cards/HorseCard'

import { constructStaticUrl } from 'utils/horseutils'

// mockup data
import {
  syndicateMembers,
  tableStatistics,
  racePlans,
  horseQuote,
  horseValue,
  benefitsList
} from 'data/horse'

import {
  aboutDescription,
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
      messages = []
    } = data

    const { slug } = owner
    const syndicateLink = `/syndicate/${slug}`

    const aboutSection = (
      <div>
        <h1>
          About the horse
        </h1>
        <Separator modifier='white' />
        <p>
          {description}
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
        <h4 className='uppercase'>
          Availability
        </h4>
        <List items={availabilityList} />
      </div>
    )

    // TODO: Members
    const members = syndicateMembers.map((member, index) => (
      <HorseTeamMember
        key={index}
        {...member}
      />
    ))

    const updatesInfo = (
      <p className='public-horse__updates-info'>
        There are {messages.length} updates associated with this horse. Request to join and get full access.
      </p>
    )

    return (
      <View title={titleize(name || '')} notPrefixed>
        <div className='public-horse'>
          <div className='public-horse__header'>
            <HorseHeader
              data={data}
              leftSection={(
                <div>
                  {aboutSection}
                  <div>
                    {/* TODO: Members */}
                    {/* {members} */}
                  </div>
                </div>
              )}
              rightSection={(
                <div>
                  {availabilitySection}
                  {updatesInfo}
                  <div className='public-horse__buttons section-shadow section-shadow--tile section-shadow--bottom'>
                    <Link to={syndicateLink}>
                      <TextButton
                        text='Request to join'
                        className='public-horse__button'
                        modifier='md'
                      />
                    </Link>
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
              mobileSection={aboutSection}
              slideSection={[
                (
                <HorseBigSection>
                  <div className='container'>
                    {aboutSection}
                  </div>
                </HorseBigSection>
                ), (
                <HorseSmallSection>
                  <div className='container'>
                    {availabilitySection}
                    {updatesInfo}
                  </div>
                </HorseSmallSection>
                )
              ]}
            />
          </div>
          <div className='public-horse__section container hidden-md-up'>
            <Carousel
              containerClassName='public-horse__mobile-carousel'
              ref='carousel'
              showArrows
              slideWidth={'190px'}
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
          <div className='public-horse__hero'>
            <div className='public-horse__hero-overlay' />
            <Image
              className='public-horse__hero-image'
              imageSrc={constructStaticUrl(data.featuredImage)}
              setRef={() => {}}
            />
            <h1 className='absolute-center'>
              {horseQuote}
            </h1>
          </div>
          <div className='public-horse__section container'>
            <div className='col-xs-12 col-md-7 no-padding'>
              <h1>
                Expectations
              </h1>
              <Separator modifier='blue' />
              <div>
                {horseValue.text}
              </div>
            </div>
          </div>
          <div className='public-horse__footer wave-bg section-shadow'>
            <div className='public-horse__footer-cont container'>
              <div className='public-horse__involvement col-xs-12 col-sm-6'>
                <h1>
                  Involvement
                </h1>
                <Separator modifier='grey' />
                <h4 className='uppercase'>
                  Benefits
                </h4>
                <p className='hidden'>
                  For this filly we offer the following guarantee:  If due to injury or retirement, this filly's season is cut short and will not race again, and she has not raced at least twice, we will replace her with a similar horse for the remainder of the 2017 turf season. Please note that we are unable to pay prizemoney on any replacements and the replacement will be a horse of our own choosing.
                </p>
                <List items={benefitsList} />
                {updatesInfo}
                <div className='public-horse__availability-section'>
                  {availabilitySection}
                </div>
                <Link to={syndicateLink}>
                  <TextButton
                    text='Request to join'
                    modifier='md'
                    className='public-horse__join-button'
                  />
                </Link>
              </div>
              <div className='public-horse__horse-section col-xs-12 col-sm-6'>
                {/* TODO: Update horse card */}
                <div className='public-horse__horse-card absolute-center'>
                  <HorseCard
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
                      value: 'Jacob William Beckett'
                    }, {
                      name: 'Syndicate name',
                      value: 'Vitamin London'
                    }, {
                      name: 'Initial cost/share',
                      value: '£15,750 + VAT'
                    }, {
                      name: 'Monthly cost/share',
                      value: '£4,995 + VAT'
                    }]}
                    extra={{
                      title: '5 of 20 shares available',
                      text: '*each share is equivalent to 5%',
                      updateAmount: 99,
                      url: 'null'
                    }}
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
  ...horse
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
