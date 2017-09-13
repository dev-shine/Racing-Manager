import React, { Component } from 'react'

import { connect } from 'react-redux'

import { fetchHorseInfo, clearHorseData } from 'actions/horse'

import HorseHero from 'components/horse/HorseHero'
import HorseNavBar from 'components/horse/HorseNavBar'
import HorseAbout from 'components/horse/HorseAbout'
import HorseInvolvement from 'components/horse/HorseInvolvement'
import HorseTeamMember from 'components/horse/HorseTeamMember'

import SyndicateSplitSection from 'components/syndicate/SyndicateSplitSection'

import View from 'components/routing/View'

import capitalize from 'utils/capitalize'

import { timestampToDate } from 'utils/dateutils'
import { calcPercent } from 'utils/horseutils'
import { roundNumberWithoutZeros } from 'utils/number'

import TitleDescriptionSection from 'components/common/TitleDescriptionSection'

import {
  benefitsList,
  racePlans,
  horseValue,
  syndicateMembers,
  horseHero
} from 'data/horse'

import AjaxLoader from 'components/loaders/ajaxloader'

import { FadeIn } from 'components/animation'

/**
 *  Edit
 */
import {
  Route
} from 'react-router-dom'

import QuoteEditContainer from 'containers/edit/QuoteEditContainer'

import HorseParallaxContent from 'components/horse/HorseParallaxContent'

class HorseInformation extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    this.props.getHorseInfo()
  }

  componentWillUnmount () {
    this.props.clearHorseData()
  }

  render () {
    const {
      data,
      match,
      fetching
    } = this.props

    const {
      description,
      timeformComments,
      owner = {},
      shares = {}
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

    return (
      <View title={capitalize(data.name)} notPrefixed>
        <div className='horse-information'>
          <HorseHero
            data={data} />

          <div className='horse-information__section--shadow section-shadow--bottom'>
            <HorseNavBar
              name={match.params.name} />
          </div>

          <SyndicateSplitSection
            leftComponent={(
              <HorseAbout
                description={description}
                timeformComments={timeformComments}
                syndicateLink={syndicateLink} />
            )}
            rightComponent={(
              <HorseInvolvement
                benefits={benefitsList}
                shares={shares}
                ownershipYears={ownershipYears}
                ownershipEndDate={ownershipEndDate}
                percentShares={percentShares} />
            )} />

          <div className='container'>
            <div className='horse-information__section'>
              <TitleDescriptionSection
                title={'key members'}
                colorModifier='blue'>
                  <div className='row'>
                    {syndicateMembers.map((member, index) => {
                      return (
                        <div
                          key={index}
                          className='horse-information__grid-item col-lg-2 col-md-3 col-sm-4 col-xs-12'>
                          <HorseTeamMember
                            className='horse-information__member'
                            image={member.image}
                            name={member.name}
                            role={member.role}
                            description={member.description} />
                        </div>
                      )
                    })}
                  </div>
                </TitleDescriptionSection>
            </div>

            <div className='horse-information__section row'>
              <div className='col-xs-12 col-md-7'>
                <TitleDescriptionSection
                  title={racePlans.title}
                  colorModifier='blue'>
                  {racePlans.text}
                </TitleDescriptionSection>
              </div>
            </div>
          </div>

          {/* Edit section */}
          <Route exact path='/horse/:name/information/edit' render={() => {
            return (
              <QuoteEditContainer placeholder={horseHero.title(owner.name)}>
              {
                ({ value }) => {
                  return (
                    <HorseParallaxContent
                      title={value || horseHero.title(owner.name)}
                      image={horseHero.image}
                    />
                  )
                }
              }
              </QuoteEditContainer>
            )
          }} />

          <div className='container'>
            <div className='horse-information__section row'>
              <div className='col-xs-12 col-md-7'>
                <TitleDescriptionSection
                  title={horseValue.title}
                  colorModifier='blue'>
                  {horseValue.text}
                </TitleDescriptionSection>
              </div>
            </div>
          </div>
          <FadeIn>
            {(fetching) && <AjaxLoader />}
          </FadeIn>
        </div>
      </View>
    )
  }
}

const mapStateToProps = ({ horse }) => ({
  ...horse.horseInfo
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  getHorseInfo: () => {
    const name = ownProps.match.params.name
    return dispatch(fetchHorseInfo(name))
  },
  clearHorseData: () => {
    return dispatch(clearHorseData())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HorseInformation)
