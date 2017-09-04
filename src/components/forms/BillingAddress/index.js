import React, { PureComponent } from 'react'

import PropTypes from 'prop-types'

import Input from 'components/input/Input'

import Select, { Option } from 'components/input/Select'

import { Form, Field } from 'components/forms/BaseForm'

import {
  ADDRESS_ONE,
  ADDRESS_TWO,
  TOWN_CITY,
  COUNTRY,
  POSTCODE
} from 'texts/forms'

class BillingAddressForm extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    const { submitForm, values } = this.props

    return (
      <div className='billing-address-form'>
        <Form
          handleSubmit={() => { submitForm(values) }}
          {...this.props}>

          <div className='form__group'>
            <Field
              component={Input}
              placeholder={ADDRESS_ONE}
              validate={['addressOne']}
              name='addressOne' />
          </div>

          <div className='form__group'>
            <Field
              component={Input}
              placeholder={ADDRESS_TWO}
              validate={['addressTwo']}
              name='addressTwo' />
          </div>

          <div className='form__group'>
            <Field
              component={Input}
              placeholder={TOWN_CITY}
              validate={['townCity']}
              name='townCity' />
          </div>

          <div className='form__group'>
            <Field
              defaultValue={COUNTRY}
              component={Select}
              validate={['country']}
              name='country'>
                <Option value={'United Kingdom'}>United Kingdom</Option>
                <Option value={'France'}>France</Option>
                <Option value={'United States Of America'}>United States Of America</Option>
            </Field>
          </div>

          <div className='form__group'>
            <Field
              component={Input}
              placeholder={POSTCODE}
              validate={['postCode']}
              name='postCode' />
          </div>

        </Form>
      </div>
    )
  }
}

BillingAddressForm.propTypes = {
  submitForm: PropTypes.func,
  values: PropTypes.object
}

export default BillingAddressForm
