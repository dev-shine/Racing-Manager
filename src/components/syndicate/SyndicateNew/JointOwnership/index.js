import React, { Component } from 'react'

import TextButton from 'components/buttons/TextButton'

class JointOwnership extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="joint-ownership__section">
        <h2 className="uppercase">
          Joint ownership
        </h2>
        <div className="underline" />
        <h4 className="small">
          2-12 People
        </h4>
        <div className="small-group">
          <p className="small">
            Each joint owner is required tobe a registered owner, and percentages
            are specified to each horse registered. The horse can run in either a
            joint ownership name or in the name of one of the joint owners.
          </p>
        </div>
        <div className="joint-ownership-btn">
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

export default JointOwnership
