import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import View from 'components/routing/View'
import titleize from 'titleize'

import FeedGallery from 'components/tiles/FeedGallery'
import TextButton from 'components/buttons/TextButton'
import Separator from 'components/gui/Separator'
import List from 'components/gui/List'
import Carousel from 'components/carousel'
import Hero from 'components/parallax/Hero'
import Image from 'components/image'

import HorseBigSection from 'components/horse/HorseBigSection'
import HorseSmallSection from 'components/horse/HorseSmallSection'
import HorseHero from 'components/horse/HorseHero'

import { constructStaticUrl } from 'utils/horseutils'
import { fetchSyndicateInfo, clearSyndicateData } from 'actions/syndicate'

// mockup data
import {
  syndicateUpperHero,
  syndicateLowerHero
} from 'data/syndicate'

// mockup data
import {
  requestToJoin
} from 'data/horse'

export class PrivateSyndicate extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    this.props.getSyndicateInfo()
  }

  componentWillUnmount () {
    this.props.clearSyndicateData()
  }

  render () {
    const {
      data = {}
    } = this.props

    const defaultDescription = 'We put together small groups of people to share in a number of top quality racehorses in order to experience racing at the highest level in the UK and around the world. Highclere Thoroughbred Racing takes its name from Highclere Castle, Harry Herbert’s ancestral home and the location of Highclere Stud where we hold our annual Yearling Parade. We treat each owner as if he or she own their horses outright. We keep our owners fully up to date with every aspect of their bloodstock’s progress from training yard to racetrack. The number of shares available per syndicate varies between ten and twenty...'

    const {
      name,
      owner = {
        name: '-'
      },
      featuredImage = '',
      logo = '',
      description = defaultDescription,
      messages = []
    } = data

    const benefits = [
      'Pro rata prize money share',
      'Pro rata share of resale proceeds',
      'Regular yard visits',
      'Personalised messages and clips from the team',
      'Live content from the races',
    ]

    const aboutSection = (
      <div>
        <h1 className='horse-header__medium-title uppercase'>
          About the syndicate
        </h1>
        <Separator modifier='white' />
        <p className='horse-header__paragraph'>
          {description}
        </p>
      </div>
    )

    const involvementSection = (
      <div>
        <h1 className='horse-header__medium-title uppercase'>
          Benefits
        </h1>
        <Separator modifier='white' />
        <List items={benefits} />
      </div>
    )

    return (
      <View title={titleize(name || '')} isPrefixed={false}>
        <div className='syndicate'>
          <div className='syndicate__image'>
            <Hero featuredImage={constructStaticUrl(featuredImage)} />
            <div className='syndicate__logo absolute-center'>
              <div className='syndicate__logo-img'>
                {
                  logo ? (
                    <Image
                      className='syndicate__logo-element absolute-center'
                      imageSrc={constructStaticUrl(logo)}
                    />
                  ) : (
                    <h1 className='horse-header__medium-title syndicate__logo-title absolute-center'>
                      {name}
                    </h1>
                  )
                }
              </div>
              <div className='syndicate__logo-desc section-shadow'>
                <div>Racing Club</div>
                <div>Managed by {owner.name}</div>
              </div>
            </div>
          </div>
          <div className='row visible-md-up'>
            <div className='syndicate__content'>
              <div className='horse-header__content section-holder'>
                <div className='container  no-padding'>
                  <HorseBigSection className='col-md-8'>
                    {aboutSection}
                  </HorseBigSection>
                  <HorseSmallSection className='col-md-4 syndicate__benefits'>
                    {involvementSection}
                    <div className='syndicate__buttons section-shadow section-shadow--tile section-shadow--bottom'>
                      <a href={requestToJoin} target='_blank'>
                        <TextButton
                          text='Request to join'
                          modifier={['md', 'fluid', 'blue']}
                        />
                      </a>
                      <Link to='/'>
                        <TextButton
                          text='Talk to the manager'
                          modifier={['md', 'fluid', 'secondary-blue']}
                        />
                      </Link>
                      <Link to='/' className='link--italic syndicate__link'>
                        Save it for later
                      </Link>
                    </div>
                  </HorseSmallSection>
                </div>
              </div>
            </div>
          </div>
          <HorseBigSection className='hidden-md-up'>
            <Carousel ref='carousel' showPagination>
              <div className='container'>
                {aboutSection}
              </div>
              <div className='container'>
                {involvementSection}
              </div>
            </Carousel>
          </HorseBigSection>
          <div className='private-syndicate'>
            <div className='private-syndicate__paragraph-section container'>
              <div className='col-xs-12 col-md-6'>
                <h1 className='uppercase'>
                  Benefits
                </h1>
                <Separator modifier='blue' />
                <p>
                  For this filly we offer the following guarantee:  If due to injury or retirement, this filly's season is cut short and will not race again, and she has not raced at least twice, we will replace her with a similar horse for the remainder of the 2017 turf season. Please note that we are unable to pay prizemoney on any replacements and the replacement will be a horse of our own choosing.
                </p>
              </div>
              <div className='col-xs-12 col-md-6 hidden'>
                image here
              </div>
            </div>
            <div className='private-syndicate__parallax-section'>
              <HorseHero {...syndicateUpperHero} />
            </div>
            <div className='private-syndicate__parallax-section'>
              <HorseHero {...syndicateLowerHero} />
            </div>
          </div>
          <div className='syndicate__grid__title container'>
            <h1 className='horse-overview__main-title horse-overview__update-title uppercase'>
              Updates
            </h1>
          </div>
          <div className='syndicate__grid container'>
            <FeedGallery
              tiles={messages} />
          </div>
        </div>
      </View>
    )
  }
}

const mapStateToProps = ({ syndicate }, ownProps) => ({
  ...syndicate
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  getSyndicateInfo: () => {
    const name = ownProps.match.params.name
    dispatch(fetchSyndicateInfo({ name }))
  },
  clearSyndicateData: () => {
    return dispatch(clearSyndicateData())
  }
})

export default (connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateSyndicate))
