import React, { Component } from 'react'

import TextButton from 'components/buttons/TextButton'

import { withRouter } from 'react-router'

class SyndicateExisting extends Component {
  constructor (props) {
    super(props)
  }

  toExistingSyndicate (ownProps) {
    ownProps.history.push('/register-existing-syndicate')
  }

  render () {
    return (
      <div className="existing-syndicate">
        <h2 className="uppercase">
          I already manage a syndicate
        </h2>
        <div className="underline" />
        <div className="small-group">
          <p className="small">
            Do you currently manage a syndicate which is located in the
            UK and is a registered co-ownership entity with the British
            Horseracing Authority? If so you are elligible to list your
            syndicate with The Racing Manager.
          </p>
        </div>
        <div className="existing-syndicate-btn">
          <TextButton
            text='List my existing syndicate'
            className='syndicate__btn-details'
            modifier='md'
            onClick={this.toExistingSyndicate(this.props)}
          />
        </div>
      </div>
    )
  }
}

export default withRouter(SyndicateExisting)