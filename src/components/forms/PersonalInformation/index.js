import React, { PureComponent } from 'react'

import PropTypes from 'prop-types'

import Input from 'components/input/Input'

import PictureUpload from 'components/input/PictureUpload'

import { Form, Field, Submit } from 'components/forms/BaseForm'

import TextButton from 'components/buttons/TextButton'

import {
  FIRSTNAME_PLACEHOLDER,
  SURNAME_PLACEHOLDER,
  USERNAME_PLACEHOLDER,
  LOCATION_PLACEHOLDER,
  BIRTHDAY_PLACEHOLDER
} from 'texts/forms'

class PersonalInformationForm extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    const { submitForm, values, canProgress } = this.props

    return (
      <div className='personal-information-form'>
        <Form
          handleSubmit={() => { submitForm(values) }}
          {...this.props}>

          <div className='form__group'>
            <PictureUpload />
          </div>

          <div className='form__group'>
            <h4 className='form__section-label semi-bold capitalize'>your name</h4>
          </div>

          <div className='form__group'>
            <Field
              component={Input}
              placeholder={FIRSTNAME_PLACEHOLDER}
              validate={['firstname']}
              name='firstname' />
          </div>
          <div className='form__group'>
            <Field
              component={Input}
              placeholder={SURNAME_PLACEHOLDER}
              validate={['surname']}
              name='surname' />
          </div>
          <div className='form__group'>
            <Field
              disabled
              component={Input}
              placeholder={USERNAME_PLACEHOLDER}
              validate={['username']}
              name='username' />
          </div>

          <div className='form__group'>
            <h4 className='form__section-label form__section-label--title-margin capitalize'>birthday</h4>
          </div>

          <div className='form__group'>
            <Field
              component={Input}
              placeholder={BIRTHDAY_PLACEHOLDER}
              validate={['birthday']}
              name='birthday' />
          </div>

          <div className='form__group'>
            <h4 className='form__section-label form__section-label--title-margin capitalize'>location</h4>
          </div>

          <div className='form__group'>
            <Field
              component={Input}
              placeholder={LOCATION_PLACEHOLDER}
              validate={['location']}
              name='location' />
          </div>

          <Submit component={(props) => TextButton({
            ...props,
            text: 'save changes',
            isDisabled: !canProgress
          })} />
        </Form>
      </div>
    )
  }
}

PersonalInformationForm.propTypes = {
  submitForm: PropTypes.func,
  values: PropTypes.object
}

export default PersonalInformationForm
