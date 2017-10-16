import React, { Component } from 'react'

import TextButton from 'components/buttons/TextButton'

class SoleOwner extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="sole-owner__section">
        <h2 className="uppercase">
          Sole owner
        </h2>
        <div className="underline" />
        <h4 className="small">
          1 Person
        </h4>
        <div className="small-group">
          <p className="small">
            This is when you are the only person involved in the ownership of the const
            horse and you have a 100% share in the animal. The horse will run in
            your name and colours. Any costs of profits will be your shares alone.
          </p>
        </div>
        <div className="sole-owner-btn">
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

export default SoleOwner
