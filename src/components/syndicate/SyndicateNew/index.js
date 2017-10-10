import React, { Component } from 'react'

import TextButton from 'components/buttons/TextButton'

import { withRouter } from 'react-router'

class SyndicateNew extends Component {
  constructor (props) {
    super(props)
  }

  toNewSyndicate (ownProps) {
    ownProps.history.push('/register-new-syndicate')
  }

  render () {
    return (
      <div className="new-syndicate">
        <h2 className="uppercase">
          Create a new syndicate
        </h2>
        <div className="underline" />
        <div className="small-group">
          <p className="small">
            Interested in creating and managing a new syndicate? In
            partnership with the British Horseracing Authority and
            Wetherbys, The Racing Manager makes the whole registration
            process very simple.
          </p>
        </div>
        <div className="new-syndicate-btn">
          <TextButton
            text='Create a new syndicate'
            className='syndicate__btn-details'
            modifier='md'
            onClick={this.toNewSyndicate(this.props)}
          />
        </div>
      </div>
    )
  }
}

export default withRouter(SyndicateNew)
