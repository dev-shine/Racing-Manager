/**
 * @module React
 */
import React from 'react'

/**
 * @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 * @module Input
 */
import Input from 'components/input/Input'

/**
 * @module Checkbox
 */
import Checkbox from 'components/input/Checkbox'

/**
 *  @module Form, Field
 */
import { Form, Field, Submit } from 'components/forms/BaseForm'

/**
 * @module TextButton
 */
import TextButton from 'components/buttons/TextButton'

/**
 *  @module Link
 */
import { Link } from 'react-router-dom'

/**
 * @name RegisterForm
 * @param { Object } props
 * @property {Object} [values]
 * @property {Function} [validators]
 * @return { React.Component }
 */
const RegisterForm = props => {
  const { submitForm, values, canProgress } = props

  return (
    <div className='register-form'>
      <Form
        handleSubmit={() => { submitForm(values) }}
        {...props}
        className='register-form__form'>

        <h2 className='register-form__section-label'>Name</h2>
        <div className='input-group'>
          <Field
            component={Input}
            placeholder='First Name'
            validate={['firstname']}
            name='firstname' />
          <Field
            component={Input}
            placeholder='Surname'
            validate={['surname']}
            name='surname' />
        </div>
        <h2 className='register-form__section-label'>Email</h2>
        <Field
          component={Input}
          placeholder='Enter your email address'
          validate={['email']}
          name='email' />
        <h2 className='register-form__section-label'>Password</h2>
        <Field
          component={Input}
          placeholder='Min 8 characters, 1 uppercase and 1 digit'
          validate={['password']}
          type='password'
          name='password' />
        <div className='register-form__checkboxes'>
          <Field
            component={Checkbox}
            label='Are you over 18?'
            validate={['overEighteen']}
            name='overEighteen' />
          <Field
            component={Checkbox}
            label={<span>Do you agree to <Link to="/terms-and-conditions">terms and conditions</Link>?</span>}
            validate={['termsAndConditions']}
            name='termsAndConditions' />
        </div>
        <Link to='/browse-horses'>
          <Submit component={(props) => TextButton({
            ...props,
            text: 'submit',
            className: 'register-form__submit',
            isDisabled: !canProgress
          })} />
        </Link>
      </Form>
    </div>
  )
}

/**
 *  propTypes
 *  @type {Object}
 */
RegisterForm.propTypes = {
  submitForm: PropTypes.func,
  values: PropTypes.object
}

/**
 *  @module ManagerRegistration
 */
export default RegisterForm
