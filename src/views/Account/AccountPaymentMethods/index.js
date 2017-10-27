import React, { PureComponent } from 'react'

import AccountAddCreditCardForm from 'containers/Payment/StripeAddCard'

import AccountCreditCard from 'components/account/AccountCreditCard'

import AccountAddPaymentMethodCard from 'components/account/AccountAddPaymentMethodCard'

class AccountPaymentMethods extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='account-payment-methods'>
        <div className='account-payment-methods__container'>
          <div className='row'>
            <div className='col-lg-6 col-md-8 col-sm-10 col-xs-12'>
              <h2 className='uppercase'>
                payment methods
              </h2>
              <div className='account-payment-methods__section'>
                <h4 className='capitalize'>
                  Sending
                </h4>
              </div>

              <div className='account-payment-methods__section'>
                <p className='small'>
                  Your card details for paying are held anonymously and securely and cannot be accessed by any third party.
                </p>
              </div>
            </div>
          </div>

          <div className='account-payment-methods__section'>
            <div className='row'>
              <div className='col-md-6 col-sm-12 col-xs-12 account-payment-methods__section--bottom'>
                <AccountAddCreditCardForm />
              </div>
              <div className='col-md-6 col-sm-12 col-xs-12 account-payment-methods__section--bottom'>
                <AccountAddPaymentMethodCard />
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-lg-6 col-md-8 col-sm-10 col-xs-12'>
              <div className='account-payment-methods__section'>
                <h4 className='capitalize'>
                  Receiving
                </h4>
              </div>

              <div className='account-payment-methods__section'>
                <p className='small'>
                  Here you are able to check, update and add your TRM personal information for a more tailored experience.
                </p>
              </div>
            </div>
          </div>

          <div className='account-payment-methods__section'>
            <div className='row'>
              <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12 account-payment-methods__section--bottom'>
                <AccountCreditCard
                  cardType='visa debit'
                  holderName='N DE ROZARIEUX'
                  horseCount={1}
                  cardNumber={'4658 **** **** ****'}
                  expiry='12/20'
                  postCode='BN21 2PP' />
              </div>

              <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12 account-payment-methods__section--bottom'>
                <AccountCreditCard
                  cardType='visa credit'
                  holderName='N DE ROZARIEUX'
                  horseCount={2}
                  cardNumber={'5046 **** **** ****'}
                  expiry='10/19'
                  postCode='SE13 3SS' />
              </div>

              <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12 account-payment-methods__section--bottom'>
                <AccountCreditCard
                  cardType='visa debit'
                  holderName='TRM Manager'
                  horseCount={8}
                  cardNumber={'4659 **** **** ****'}
                  expiry='10/21'
                  postCode='SW1V 1HS' />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AccountPaymentMethods
