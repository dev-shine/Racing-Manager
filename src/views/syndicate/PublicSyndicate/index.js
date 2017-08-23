import React, { Component } from 'react'

import { connect } from 'react-redux'

import View from 'components/routing/View'

import titleize from 'titleize'

import { fetchSyndicateInfo, clearSyndicateData } from 'actions/syndicate'

import SyndicateHero from 'components/syndicate/SyndicateHero'
import SyndicateSplitSection from 'components/syndicate/SyndicateSplitSection'
import SyndicateAbout from 'components/syndicate/SyndicateAbout'
import SyndicateInvolvement from 'components/syndicate/SyndicateInvolvement'
import SyndicateCtaCard from 'components/syndicate/SyndicateCtaCard'

import HorseMemberCarousel from 'components/horse/HorseMemberCarousel'

import {
  description as syndicateDesc,
  benefits as syndicateBenefits,
  benefitsDescription as syndicateBenefitsDescription
} from 'data/syndicate'

import {
  syndicateMembers
} from 'data/horse'

export class PublicSyndicate extends Component {
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

    const {
      name,
      owner = { name: '-' },
      featuredImage = '',
      logo = '',
      description = syndicateDesc
    } = data

    return (
      <View title={titleize(name || '')} isPrefixed={false}>
        <div className='public-syndicate'>
          <SyndicateHero
            featuredImage={featuredImage}
            owner={owner}
            logo={logo}
            name={name} />
          <div className='public-syndicate__header'>
            <SyndicateSplitSection
              leftComponent={
                <SyndicateAbout description={description} />
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
            <div className='col-md-8 col-sm-12 public-syndicate__team-members'>
              <HorseMemberCarousel
                syndicateMembers={syndicateMembers} />
            </div>
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
)(PublicSyndicate))
