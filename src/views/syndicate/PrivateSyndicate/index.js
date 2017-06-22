import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import FeedGallery from 'components/tiles/FeedGallery'
import TextButton from 'components/buttons/TextButton'
import Separator from 'components/gui/Separator'
import List from 'components/gui/List'
import Carousel from 'components/carousel'
import Hero from 'components/parallax/Hero'
import Image from 'components/image'

import HorseBigSection from 'components/horse/HorseBigSection'
import HorseSmallSection from 'components/horse/HorseSmallSection'

import { constructStaticUrl } from 'utils/horseutils'

import { fetchSyndicateInfo } from 'actions/syndicate'

export class PrivateSyndicate extends Component {
  constructor (props) {
    super(props)

    this.handleRequestToJoin = this.handleRequestToJoin.bind(this)
    this.handleTalkToManager = this.handleTalkToManager.bind(this)
  }

  componentDidMount () {
    this.props.getSyndicateInfo()
  }

  handleRequestToJoin () {
  }

  handleTalkToManager () {
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
        <h1 className='horse-header__medium-title'>
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
        <h1 className='horse-header__medium-title'>
          Benefits
        </h1>
        <Separator modifier='white' />
        <List items={benefits} />
      </div>
    )

    return (
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
                    <TextButton
                      text='Request to join'
                      className='syndicate__button'
                      modifier={['md', 'blue']}
                      onClick={this.handleRequestToJoin}
                    />
                    <TextButton
                      text='Talk to the manager'
                      className='syndicate__button'
                      modifier={['md', 'secondary-blue']}
                      onClick={this.handleTalkToManager}
                    />
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
        <div className='syndicate__grid__title container'>
          <h1 className='horse-overview__main-title horse-overview__update-title'>
            Updates
          </h1>
        </div>
        <div className='syndicate__grid container'>
          <FeedGallery
            tiles={messages} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  ...state.syndicate
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getSyndicateInfo: () => {
      const name = ownProps.match.params.name
      dispatch(fetchSyndicateInfo({ name }))
    }
  }
}

export default (connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateSyndicate))
