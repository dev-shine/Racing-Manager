import React, { PureComponent } from 'react'

class AccountPaymentMethods extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='account-payment-methods'>
        <div className='account-payment-methods__container'>
          <div className='col-lg-6 col-md-8 col-sm-10 col-xs-12'>
            <h2 className='uppercase'>
              payment methods
            </h2>
            <div className='account-payment-methods__section'>
              <h4 className='capitalize'>
                outgoing
              </h4>
            </div>

            <div className='account-payment-methods__section'>
              <p className='small'>
                Here you are able to check, update and add your TRM personal information for a more tailored experience.
              </p>
            </div>

            <div className='account-payment-methods__section'>
              <h4 className='capitalize'>
                incoming
              </h4>
            </div>

            <div className='account-payment-methods__section'>
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

export default AccountPaymentMethods
