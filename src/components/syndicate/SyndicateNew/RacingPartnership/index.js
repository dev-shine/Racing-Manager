import React, { Component } from 'react'

import TextButton from 'components/buttons/TextButton'

class RacingPartnership extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="racing-partnership__section">
        <h2 className="uppercase">
          Racing partnership
        </h2>
        <div className="underline" />
        <h4 className="small">
          2-20 People
        </h4>
        <div className="small-group">
          <p className="small">
            At least two partners must be a registered owner. The two registered
            owners ('nominated partners') are ultimately responsible for the setup
            and administration of the Racing Partnership.
          </p>
        </div>
        <div className="racing-partnership-btn">
          <TextButton
            text="SELECT"
            className="syndicate__button"
            onClick={() => {}}/>
        </div>
        <div className="more-info-btn">
          <TextButton
            text='More info'
            modifier='secondary'
            className='syndicate__more-btn'
            onClick={() => {}}
          />
        </div>
      </div>
    )
  }
}

export default RacingPartnership

