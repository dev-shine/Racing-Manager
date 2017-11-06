import React, { Component } from 'react'

import Checkbox from 'components/input/Checkbox'

import TextButton from 'components/buttons/TextButton'

import {
  CardView,
  SpecCardFrame,
  CardHeading
} from 'components/cards/FeaturedCard'

import {
  onboardingDescription
} from 'data/syndicate'

import {multilineTextToJSX} from 'utils/textutils'

class DurationEditor extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isSelectedCheckbox: '',
      isShownFixedPeriod: false,
      isShownOpenEnded: false
    }

    this.isSeletedFixedPeriod = this.isSeletedFixedPeriod.bind(this)
    this.isSeletedOpenEnded = this.isSeletedOpenEnded.bind(this)
    this.showMoreFixedPeriod = this.showMoreFixedPeriod.bind(this)
    this.showMoreOpenEnded = this.showMoreOpenEnded.bind(this)
  }

  isSeletedFixedPeriod () {
    this.setState({
      isSelectedCheckbox: 'fixed_period'
    })
  }

  isSeletedOpenEnded () {
    this.setState({
      isSelectedCheckbox: 'open_ended'
    })
  }

  showMoreFixedPeriod () {
    this.setState({
      isShownFixedPeriod: !(this.state.isShownFixedPeriod)
    })
  }

  showMoreOpenEnded () {
    this.setState({
      isShownOpenEnded: !(this.state.isShownOpenEnded)
    })
  }

  render () {
    return (
      <div className="horse-duration-card">
        <div className={ this.state.isSelectedCheckbox === 'fixed_period' ? 'horse-duration-card__fixed-selected' : 'horse-duration-card__fixed-unselected' }>
          <CardView>
            <SpecCardFrame>
              <CardHeading>
                <Checkbox
                  label="FIXED PERIOD"
                  name="fixed_period"
                  handleChange={() => { this.isSeletedFixedPeriod() }}
                  value={ this.state.isSelectedCheckbox === 'fixed_period' } />
                <TextButton
                  text={ this.state.isShownFixedPeriod ? 'Hide' : 'Show More' }
                  modifier='secondary'
                  className='duration__more-btn'
                  onClick={() => { this.showMoreFixedPeriod() }}
                />
                { this.state.isShownFixedPeriod ? <div>{ multilineTextToJSX(onboardingDescription) }</div> : null }
              </CardHeading>
            </SpecCardFrame>
          </CardView>
        </div>
        <div className={this.state.isSelectedCheckbox === 'open_ended' ? 'horse-duration-card__ended-selected' : 'horse-duration-card__ended-unselected' }>
          <CardView>
            <SpecCardFrame>
              <CardHeading>
                <Checkbox
                  label="OPEN ENDED"
                  name="open_ended"
                  handleChange={() => { this.isSeletedOpenEnded() }}
                  value={ this.state.isSelectedCheckbox === 'open_ended' } />
                <TextButton
                  text={ this.state.isShownOpenEnded ? 'Hide' : 'Show More' }
                  modifier='secondary'
                  className='duration__more-btn'
                  onClick={() => { this.showMoreOpenEnded() }}
                />
                { this.state.isShownOpenEnded ? <div>{ multilineTextToJSX(onboardingDescription) }</div> : null }
              </CardHeading>
            </SpecCardFrame>
          </CardView>
        </div>
      </div>
    )

  }
}

export default DurationEditor
