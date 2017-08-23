import React, { Component } from 'react'

import { connect } from 'react-redux'

import View from 'components/routing/View'

import titleize from 'titleize'

import { fetchSyndicateInfo, clearSyndicateData } from 'actions/syndicate'

import SyndicateHero from 'components/syndicate/SyndicateHero'
import SyndicateSplitSection from 'components/syndicate/SyndicateSplitSection'
import SyndicateAbout from 'components/syndicate/SyndicateAbout'
import SyndicateInvolvement from 'components/syndicate/SyndicateInvolvement'

import {
  description as syndicateDesc,
  benefits as syndicateBenefits
} from 'data/syndicate'

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
                <SyndicateInvolvement
                  benefits={syndicateBenefits} />
              } />
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
