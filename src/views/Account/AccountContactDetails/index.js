import React, { PureComponent } from 'react'

class AccountContactDetails extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='account-contact-details'>
        <div className='account-contact-details__container'>
          <div className='col-lg-6 col-md-8 col-sm-10 col-xs-12'>
            <h2 className='uppercase'>
              Contact details
            </h2>
            <div className='account-contact-details__section'>
              <p className='small'>
                Here you are able to check, update and add your TRM personal information for a more tailored experience.
              </p>
            </div>
            <div className='account-contact-details__section'>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AccountContactDetails
