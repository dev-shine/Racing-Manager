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

class TeamSizeEditor extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isSelectedCheckbox: '',
      isShownPerson: false,
      isShownPeople: false
    }

    this.isSelectedPerson = this.isSelectedPerson.bind(this)
    this.isSeletedPeople = this.isSeletedPeople.bind(this)
    this.showMorePerson = this.showMorePerson.bind(this)
    this.showMorePeople = this.showMorePeople.bind(this)
  }

  isSelectedPerson () {
    this.setState({
      isSelectedCheckbox: 'person'
    })
  }

  isSeletedPeople () {
    this.setState({
      isSelectedCheckbox: 'people'
    })
  }

  showMorePerson () {
    this.setState({
      isShownPerson: !(this.state.isShownPerson)
    })
  }

  showMorePeople () {
    this.setState({
      isShownPeople: !(this.state.isShownPeople)
    })
  }

  render () {
    return (
      <div className="horse-teamsize-card">
        <div className={ this.state.isSelectedCheckbox === 'person' ? 'horse-teamsize-card__person-selected' : 'horse-teamsize-card__person-unselected' }>
          <CardView>
            <SpecCardFrame>
              <CardHeading>
                <Checkbox
                  label="1 PERSON"
                  name="person"
                  handleChange={() => { this.isSelectedPerson() }}
                  value={ this.state.isSelectedCheckbox === 'person' } />
                <TextButton
                  text={ this.state.isShownPerson ? 'Hide' : 'Show More' }
                  modifier='secondary'
                  className='teamsize__more-btn'
                  onClick={() => { this.showMorePerson() }}
                />
                { this.state.isShownPerson ? <div>{ multilineTextToJSX(onboardingDescription) }</div> : null }
              </CardHeading>
            </SpecCardFrame>
          </CardView>
        </div>
        <div className={this.state.isSelectedCheckbox === 'people' ? 'horse-teamsize-card__people-selected' : 'horse-teamsize-card__people-unselected' }>
          <CardView>
            <SpecCardFrame>
              <CardHeading>
                <Checkbox
                  label="2 - 1,000"
                  name="people"
                  handleChange={() => { this.isSeletedPeople() }}
                  value={ this.state.isSelectedCheckbox === 'people' } />
                <TextButton
                  text={ this.state.isShownPeople ? 'Hide' : 'Show More' }
                  modifier='secondary'
                  className='teamsize__more-btn'
                  onClick={() => { this.showMorePeople() }}
                />
                { this.state.isShownPeople ? <div>{ multilineTextToJSX(onboardingDescription) }</div> : null }
              </CardHeading>
            </SpecCardFrame>
          </CardView>
        </div>
      </div>
    )

  }
}

export default TeamSizeEditor
