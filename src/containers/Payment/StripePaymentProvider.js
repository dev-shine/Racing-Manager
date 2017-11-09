import React, {Component} from 'react'

import {StripeProvider} from 'react-stripe-elements'



function StripePaymentProviderHOC (WrappedComponent) {
  return class StripePaymentProvider extends Component {
    constructor (props) {
      super(props)
    }

    render () {
      return (
        <StripeProvider apiKey="pk_test_Q9MxJo2WtdipzoLhEYuhjUiB">
          <WrappedComponent {...this.props} />
        </StripeProvider>
      )
    }
  }
}

export default StripePaymentProviderHOC
