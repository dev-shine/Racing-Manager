import React, { PureComponent } from 'react'

import Checkbox from 'components/input/Checkbox'

class AccountNotifications extends PureComponent {
  constructor (props) {
    super(props)

    // USE FORM COMPONENT INSTEAD, THIS IS ONLY FOR DEMO
    this.state = {
      email: false,
      text: false
    }

    this.toggleEmail = this.toggleEmail.bind(this)
    this.toggleText = this.toggleText.bind(this)
  }

  toggleEmail () {
    this.setState(({email}) => ({
      email: !email
    }))
  }

  toggleText () {
    this.setState(({text}) => ({
      text: !text
    }))
  }

  render () {
    const {
      email,
      text
    } = this.state

    return (
      <div className='account-notifications'>
        <div className='account-notifications__container'>
          <div className='row'>
            <div className='col-lg-6 col-md-8 col-sm-10 col-xs-12'>
              <h2 className='uppercase'>
                Notifications
              </h2>
              <div className='account-notifications__section'>
                <p className='small'>
                  Here you are able to check, update and add your TRM personal information for a more tailored experience.
                </p>
              </div>
              <div className='account-notifications__section account-notifications__section--lg'>
                <div className='row-sm'>
                  {
                    /*
                      This should be extracted to a redux aware container when integrating with server.
                     */
                  }
                  <div className='col-xs-12 col-sm-6 align-middle form__group'>
                    <Checkbox
                      value={email}
                      handleChange={this.toggleEmail}
                      label='Email'
                      name='email' />
                  </div>
                  <div className='col-xs-12 col-sm-6 align-middle form__group'>
                    <Checkbox
                      value={text}
                      handleChange={this.toggleText}
                      label='Text'
                      name='text' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AccountNotifications
