import React, { Component } from 'react'
import { connect } from 'react-redux'

import View from 'components/routing/View'
import titleize from 'titleize'

import FeedGallery from 'components/tiles/FeedGallery'

import SyndicateHero from 'components/syndicate/SyndicateHero'
import SyndicateSplitSection from 'components/syndicate/SyndicateSplitSection'
import SyndicateAbout from 'components/syndicate/SyndicateAbout'
import SyndicateInvolvement from 'components/syndicate/SyndicateInvolvement'
import SyndicateCtaCard from 'components/syndicate/SyndicateCtaCard'
import SyndicateBenefits from 'components/syndicate/SyndicateBenefits'
import SyndicateIntroSection from 'components/syndicate/SyndicateIntroSection'
import SyndicateHorseCarousel from 'components/syndicate/SyndicateHorseCarousel'
import SyndicateHeritageSection from 'components/syndicate/SyndicateHeritageSection'
import SyndicateFaqPopup from 'components/syndicate/SyndicateFaqPopup'

import HorseMemberCarousel from 'components/horse/HorseMemberCarousel'
import HorseParallaxContent from 'components/horse/HorseParallaxContent'

import TitleDescriptionSection from 'components/common/TitleDescriptionSection'

import { fetchSyndicateInfo, clearSyndicateData } from 'actions/syndicate'

import {
  description as syndicateDesc,
  benefits as syndicateBenefits,
  benefitsDescription as syndicateBenefitsDescription,
  syndicateUpperHero,
  syndicateLowerHero,
  faqs
} from 'data/syndicate'

// mockup data
import {
  syndicateMembers,
  trainerMembers,
  fakeHorses
} from 'data/horse'

export class PrivateSyndicate extends Component {
  constructor (props) {
    super(props)

    this.state = {
      openFaq: false
    }

    this.toggleFaq = this.toggleFaq.bind(this)
  }

  componentDidMount () {
    this.props.getSyndicateInfo()
  }

  componentWillUnmount () {
    this.props.clearSyndicateData()
  }

  toggleFaq () {
    this.setState(({openFaq}) => ({
      openFaq: !openFaq
    }))
  }

  render () {
    const {
      data = {}
    } = this.props

    const {
      openFaq
    } = this.state

    const {
      name,
      owner = {
        name: '-'
      },
      featuredImage = '',
      logo = '',
      description = syndicateDesc,
      messages = []
    } = data

    return (
      <View title={titleize(name || '')} isPrefixed={false}>
        <div className='private-syndicate'>
          <SyndicateHero
            featuredImage={featuredImage}
            owner={owner}
            logo={logo}
            name={name} />
          <div className='private-syndicate__header'>
            <SyndicateSplitSection
              leftComponent={
                <SyndicateAbout
                  description={description}
                  onFaqClick={this.toggleFaq} />
              }
              rightComponent={
                <div>
                  <SyndicateInvolvement
                    benefits={syndicateBenefits}
                    description={syndicateBenefitsDescription(name)} />
                  <div className='visible-md-up'>
                    <SyndicateCtaCard />
                  </div>
                </div>
              } />
          </div>

          <div className='container no-padding'>
            <div className='col-md-8 col-sm-12 private-syndicate__team-members'>
              <HorseMemberCarousel
                syndicateMembers={syndicateMembers} />
            </div>
          </div>

          <div className='private-syndicate__section'>
            <div className='container'>
              <div className='col-md-5 col-sm-12'>
                <SyndicateBenefits />
              </div>
            </div>
          </div>

          <div className='private-syndicate__section-top'>
            <HorseParallaxContent {...syndicateUpperHero} />
          </div>

          <div className='private-syndicate__overlay-section'>
            <SyndicateIntroSection
              title={`${name} horses`}
              description='We have a fantastic yard of horses, all of which have run competitively and placed with great confidence. Having managed race horses for many years now, we know where quality can be found and how to thoroughly enjoy the iniafull extent of the racing experience.'>
                <SyndicateHorseCarousel
                  horses={fakeHorses} />
            </SyndicateIntroSection>
          </div>

          <div className='private-syndicate__section'>
            <div className='container'>
              <div className='col-md-5 col-sm-12'>
                <SyndicateHeritageSection />
              </div>
            </div>
          </div>

          <div className='private-syndicate__section-top'>
            <HorseParallaxContent {...syndicateLowerHero} />
          </div>

          <div className='private-syndicate__overlay-section'>
            <SyndicateIntroSection
              modifier='small'
              title='our trainers'
              description='HTR employs a selection of top racehorse trainers in each syndicate based in different areas of the country. This reduces the risk of an equine virus being a threat to any one syndicate and gives owners the chance of being involved with different leading stables.'>
                <HorseMemberCarousel
                  syndicateMembers={trainerMembers}
                  type='trainer' />
            </SyndicateIntroSection>
          </div>

          <div className='private-syndicate__section container'>
            <TitleDescriptionSection
              colorModifier='blue'
              title='syndicate updates'>
              <FeedGallery
                tiles={messages} />
            </TitleDescriptionSection>
          </div>

          <SyndicateFaqPopup
            breadcrumbText={'Back to syndicate page'}
            onClick={this.toggleFaq}
            isOpen={openFaq}
            faqs={faqs} />
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
