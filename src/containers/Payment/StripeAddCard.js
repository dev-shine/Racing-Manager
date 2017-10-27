import React, {Component} from 'react'

import { connect } from 'react-redux'

import StripePaymentProvider from './StripePaymentProvider'

import AccountAddCardForm from 'components/account/AccountAddCardForm'

import {
  updateForm as updateBillingForm,
  updateFormError as updateBillingFormError,
  resetForm as resetBillingForm
} from 'actions/account/BillingAddress'

import {
  updateForm as updateCreditCardForm,
  updateFormError as updateCreditCardFormError,
  resetForm as resetCreditCardForm,
} from 'actions/account/CreditCard'

import {
  submitCardToServer
} from 'actions/account/addCreditCard'

import { billingAddressValidators } from 'utils/validation/BillingAddress'
import { creditCardValidators } from 'utils/validation/CreditCard'
import {Elements} from 'react-stripe-elements'

class StripeAddCard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      stripeDataComplete: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  render () {
    return (
      <Elements>
        <AccountAddCardForm onCardElementChanged={this.props.onCardElementChanged} onSubmit={this.handleSubmit} {...this.props}/>
      </Elements>
    )
  }

  handleSubmit () {
    // Generate token, then call action to send to server
  }
}

const mapStateToProps = (state, ownProps) => {
  const {
    account
  } = state

  const {
    billingAddress,
    creditCard,
    info
  } = account.addCreditCard

  return {
    info,
    billingAddressInfo: {
      values: {
        addressOne: billingAddress.addressOne,
        addressTwo: billingAddress.addressTwo,
        townCity: billingAddress.townCity,
        country: billingAddress.country,
        postCode: billingAddress.postCode
      },
      errors: billingAddress.errors,
      validators: billingAddressValidators
    },
    creditCardInfo: {
      values: {
        cardType: creditCard.cardType,
        cardName: creditCard.cardName,
        cardNumber: creditCard.cardNumber,
        cardExpiry: creditCard.cardExpiry
      },
      errors: creditCard.errors,
      validators: creditCardValidators
    }
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const billingReducerName = 'accountBillingAddress'
  const creditCardReducerName = 'accountCreditCard'

  return {
    billingAddressActions: {
      update: (name, value) => {
        dispatch(updateBillingForm(name, value, billingReducerName))
      },
      updateErrors: (errors, name) => {
        dispatch(updateBillingFormError(errors, name, billingReducerName))
      }
    },
    creditCardActions: {
      update: (name, value) => {
        dispatch(updateCreditCardForm(name, value, creditCardReducerName))
      },
      updateErrors: (errors, name) => {
        dispatch(updateCreditCardFormError(errors, name, creditCardReducerName))
      }
    },
    clearForm: () => {
      dispatch(resetBillingForm(billingReducerName))
      dispatch(resetCreditCardForm(creditCardReducerName))
    },
    submitCardToServer: (token) => {
      dispatch(submitCardToServer(token))
    }
  }
}

export default StripePaymentProvider(connect(
  mapStateToProps,
  mapDispatchToProps
)(StripeAddCard))
