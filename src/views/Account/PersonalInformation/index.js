import React, { PureComponent } from 'react'

import { connect } from 'react-redux'

class PersonalInformation extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='account-personal-information'>
        <div className='account-personal-information__container'>
          <div className='col-lg-6 col-md-8 col-sm-10 col-xs-12'>
            <h2 className='uppercase'>
              personal information
            </h2>
            <div className='account-personal-information__section'>
              <p className='small'>
                Here you are able to check, update and add your TRM personal information for a more tailored experience.
              </p>
            </div>
          </div>
        </div>
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
