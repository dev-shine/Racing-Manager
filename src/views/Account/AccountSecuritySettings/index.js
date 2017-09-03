import React, { PureComponent } from 'react'

import TextButton from 'components/buttons/TextButton'

class AccountSecuritySettings extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='account-security-settings'>
        <div className='account-security-settings__container'>
          <div className='col-lg-6 col-md-8 col-sm-10 col-xs-12'>
            <h2 className='uppercase'>
              Security settings
            </h2>
            <div className='account-security-settings__section'>
              <p className='small'>
                Here you are able to check, update and add your TRM personal information for a more tailored experience.
              </p>
            </div>
            <div className='account-security-settings__section'>
              <TextButton
                text={'change password'} />
            </div>

            <div className='account-security-settings__section'>
              <h6 className='italic uppercase link'>
                deactivate account
              </h6>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default AccountSecuritySettings
