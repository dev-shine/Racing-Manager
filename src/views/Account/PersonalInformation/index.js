import React, { PureComponent } from 'react'

import { connect } from 'react-redux'

class PersonalInformation extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='account-personal-information'>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const {
    auth
  } = state

  const {
    details
  } = auth

  return {
    name: details.firstname
  }
}

export default connect(
  mapStateToProps,
  null
)(PersonalInformation)
