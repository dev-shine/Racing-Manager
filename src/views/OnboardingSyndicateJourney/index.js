/**
 *  @module react
 */
import React, { PureComponent } from 'react'

/**
 *  @module View
 */
import View from 'components/routing/View'

/**
 *  @module connect
 */
import { connect } from 'react-redux'

/**
 *  @module title
 */
import { ONBOAEDING_SYNDICATE_JOURNEY as title } from 'data/titles'

/**
 *  @module ViewHeader
 */
import ViewHeader from 'components/common/ViewHeader'

import TitleDescriptionSection from 'components/common/TitleDescriptionSection'

import {
  onboardingDescription,
  onboardingOptionDescription
} from 'data/syndicate'

import {multilineTextToJSX} from 'utils/textutils'

/**
 *  @module Counter
 */
import HorseCounter from 'components/buttons/Counter'

/**
 *  @module TextButton
 */
import TextButton from 'components/buttons/TextButton'

import {
  horseNumbers
} from 'actions/onboardingSyndicateJourney'

import HorseNameEditor from 'components/onboardingSyndicateJourney/HorseNameEditor'

import DurationEditor from 'components/onboardingSyndicateJourney/DurationEditor'

import OwnerShipTypeEditor from 'components/onboardingSyndicateJourney/OwnerShipTypeEditor'

import TeamSizeEditor from 'components/onboardingSyndicateJourney/TeamSizeEditor'

/**
 * @name OnboardingSyndicateJourney
 * @class
 * @extends PureComponent
 */

class OnboardingSyndicateJourney extends PureComponent {
  /**
   * @constructor
   * @param { Object } props
   */
  constructor (props) {
    super(props)

    this.horseNumbers = this.horseNumbers.bind(this)
  }

  horseNumbers (value) {
    this.props.horseNumbers(value)
  }

  /**
   * Render method
   * @returns { React.Component }
   */
  render () {
    const {
      horseCount
    } = this.props

    return (
      <View title={title}>
        <div className="onboarding-syndicate-journey">
          <div className="onboarding-syndicate-journey__header">
            <ViewHeader
              title={`horses`} />
          </div>
          <div className="container onboarding-syndicate-journey__section">
            <div className="syndicate-horses-number">
              <TitleDescriptionSection
                title='how many horses?'
                titleModifier='h2'
                colorModifier='blue'
                description={multilineTextToJSX(onboardingDescription)}
                >
                <div className="horses-counter">
                  <HorseCounter
                    defaultCount={this.props.horseCount}
                    onChange={(value) => this.horseNumbers(value)}/>
                </div>
              </TitleDescriptionSection>
            </div>
            <div className="syndicate-horses-tell">
              <TitleDescriptionSection
                title='tell us more'
                titleModifier='h2'
                colorModifier='blue'
                description={multilineTextToJSX(onboardingDescription)} />
              <HorseNameEditor
                horseCount={horseCount} />
            </div>
            <div className="syndicate-horses-duration">
              <TitleDescriptionSection
                title='run duration'
                titleModifier='h2'
                colorModifier='blue'
                description={multilineTextToJSX(onboardingDescription)}>
                <p>What is the team's running duration?</p>
              </TitleDescriptionSection>
              <DurationEditor />
            </div>
            <div className="syndicate-horses-ownership-type">
              <TitleDescriptionSection
                title='ownership type'
                titleModifier='h2'
                colorModifier='blue'
                description={multilineTextToJSX(onboardingDescription)}>
                <p>Do you own or lease it?</p>
              </TitleDescriptionSection>
              <OwnerShipTypeEditor />
            </div>
            <div className="syndicate-horses-team-size">
              <TitleDescriptionSection
                title='team size'
                titleModifier='h2'
                colorModifier='blue'
                description={multilineTextToJSX(onboardingDescription)}>
                <p>Including you,how many people will be involved?</p>
              </TitleDescriptionSection>
              <TeamSizeEditor />
            </div>
          </div>
          <div className="syndicate-horses-option">
            <div className="syndicate-horses-option__header">
              <TitleDescriptionSection
                title='your best option'
                titleModifier='h1'
                colorModifier='blue' >
                <div className="logo-image" style={{ backgroundImage: `url(/assets/images/logo.svg)` }}></div>
                <p>RECOMMEND</p>
              </TitleDescriptionSection>
            </div>
            <div className="syndicate-horses-option__content" style={{ backgroundImage: `url(/assets/images/wave.svg)` }}>
              <div className="content-left">
                <TitleDescriptionSection
                  title='racing ownership'
                  titleModifier='h2'
                  colorModifier='blue'
                  description='1-20 People'>
                  <div className="description">
                    <span className="description-content">{ onboardingOptionDescription }</span>
                    <span className="description-read-more">READ MORE</span>
                    <TextButton
                      modifier='fluid'
                      text='CONTINUE APPLICATION' />
                    </div>
                </TitleDescriptionSection>
              </div>
              <div className="content-right" style={{ backgroundImage: `url(/assets/images/onboarding-horse.png)` }}></div>
            </div>
          </div>
        </div>
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const {
    onboardingSyndicateJourney
  } = state

  const {
    horseCount
  } = onboardingSyndicateJourney

  return {
    horseCount
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    horseNumbers: (value) => {
      dispatch(horseNumbers(value))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OnboardingSyndicateJourney)
