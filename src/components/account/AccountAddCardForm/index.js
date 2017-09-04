import React, { PureComponent } from 'react'

import CreditCardForm from 'components/forms/CreditCard'

import BillingAddressForm from 'components/forms/BillingAddress'

import TextButton from 'components/buttons/TextButton'

import Icon from 'components/icon'

import {
  CardView,
  CardFrame,
  CardHeading,
  CardContent
} from 'components/cards/FeaturedCard'

class AccountAddCardForm extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      showBilling: false
    }

    this.showBillingForm = this.showBillingForm.bind(this)
    this.hideBillingForm = this.hideBillingForm.bind(this)
  }

  showBillingForm () {
    this.setState({
      showBilling: true
    })
  }

  hideBillingForm () {
    this.setState({
      showBilling: false
    })
  }

  render () {
    const {
      showBilling
    } = this.state

    const mockedFormProps = {
      update: () => {},
      updateErrors: () => {},
      submitForm: () => {},
      values: {},
      errors: {},
      validators: () => {}
    }

    return (
      <CardView className='account-card-form'>
        <CardFrame>
          <CardHeading>
            <div className='account-card-form__form-heading form__group'>
              <h4 className='capitalize'>
                {
                  !showBilling
                  ? 'Card Details'
                  : 'Billing Address'
                }
              </h4>
              <Icon
                onClick={this.hideBillingForm}
                className='account-card-form__close tiny cursor--pointer'
                modifier='close' />
            </div>
            {
              !showBilling
              ? (
                  <CreditCardForm {...mockedFormProps} />
                )
              : (
                  <BillingAddressForm {...mockedFormProps} />
                )
            }
          </CardHeading>
          <CardContent>
            {
            !showBilling
            ? (
                <TextButton
                  onClick={this.showBillingForm}
                  modifier={['secondary', 'fluid']}
                  isDisabled={false}
                  text='billing address' />
              )
            : (
                <TextButton
                  onClick={() => {}}
                  modifier={['fluid']}
                  isDisabled={false}
                  text='Save Card' />
              )
            }
          </CardContent>
        </CardFrame>
      </CardView>
    )
  }
}

export default AccountAddCardForm
