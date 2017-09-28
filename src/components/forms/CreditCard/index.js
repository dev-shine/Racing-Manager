import React, { PureComponent } from 'react'

import PropTypes from 'prop-types'

import Input from 'components/input/Input'

import Select from 'components/input/FormSelect'

import { Form, Field } from 'components/forms/BaseForm'

import {
  FORMAT_CREDIT_CARD,
  FORMAT_CREDIT_CARD_DATE
  } from 'utils/validation/ValidationTypes'

import {
  CARD_TYPE,
  CARD_NAME,
  CARD_NUMBER,
  CARD_EXPIRY
} from 'texts/forms'

class CreditCardForm extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    const { submitForm, values } = this.props

    return (
      <div className='credit-card-form'>
        <Form
          handleSubmit={() => { submitForm(values) }}
          {...this.props}>

          <div className='form__group'>
            <Field
              defaultValue={CARD_TYPE}
              component={Select}
              validate={['cardType']}
              name='cardType'>
                <option value={CARD_TYPE} disabled hidden>{CARD_TYPE}</option>
                <option value={'visa'}>Visa</option>
                <option value={'mastercard'}>MasterCard</option>
                <option value={'delta'}>Delta</option>
            </Field>
          </div>

          <div className='form__group'>
            <Field
              component={Input}
              placeholder={CARD_NAME}
              validate={['cardName']}
              name='cardName' />
          </div>

          <div className='form__group'>
            <Field
              component={Input}
              placeholder={CARD_NUMBER}
              validate={['cardNumber']}
              format={FORMAT_CREDIT_CARD}
              name='cardNumber' />
          </div>

          <Field
            component={Input}
            placeholder={CARD_EXPIRY}
            validate={['cardExpiry']}
            format={FORMAT_CREDIT_CARD_DATE}
            name='cardExpiry' />
        </Form>
      </div>
    )
  }
}

CreditCardForm.propTypes = {
  submitForm: PropTypes.func,
  values: PropTypes.object
}

export default CreditCardForm
