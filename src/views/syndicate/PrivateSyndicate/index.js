import React, { Component } from 'react'
import { connect } from 'react-redux'

import Separator from 'components/gui/Separator'
import List from 'components/gui/List'

import HorseHeaderSlider from 'components/horse/HorseHeaderSlider'
import ButtonSection from 'components/syndicate/ButtonSection'

export class PrivateSyndicate extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const benefits = [
      'Pro rata prize money share',
      'Pro rata share of resale proceeds',
      'Regular yard visits',
      'Personalised messages and clips from the team',
      'Live content from the races',
    ]

    return (
      <div className='syndicate container'>
        <HorseHeaderSlider>
          <div>
            <h1 className='horse-header__medium-title'>
              About the syndicate
            </h1>
            <Separator modifier='white' />
            <div>
              We put together small groups of people to share in a number of top quality racehorses in order to experience racing at the highest level in the UK and around the world. Highclere Thoroughbred Racing takes its name from Highclere Castle, Harry Herbert’s ancestral home and the location of Highclere Stud where we hold our annual Yearling Parade. We treat each owner as if he or she own their horses outright. We keep our owners fully up to date with every aspect of their bloodstock’s progress from training yard to racetrack. The number of shares available per syndicate varies between ten and twenty...
            </div>
          </div>
          <div>
            <h1 className='horse-header__medium-title'>
              Benefits
            </h1>
            <Separator modifier='white' />
            <List items={benefits} />
          </div>
        </HorseHeaderSlider>
        <ButtonSection className='syndicate__buttons' />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default (connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateSyndicate))
