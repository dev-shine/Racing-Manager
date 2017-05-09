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
import Input from 'components/input/Input/Input'

/**
 * @module Checkbox
 */
import Checkbox from 'components/input/Checkbox/Checkbox'

/**
 *  @module Form, Field
 */
import { Form, Field, Submit } from 'components/forms/reactform'

/**
 * @module PrimaryButton
 */
import PrimaryButton from 'components/buttons/PrimaryButton/PrimaryButton'

/**
 * ManagerRegistration component
 * @param { Object } props
 * @property {Object} [values]
 * @property {Function} [validators]
 * @returns { React.Component }
 */
const ManagerRegistration = props => {
  const { submitForm, values } = props

  return (
    <div className='manager-registration'>
      <Form
        handleSubmit={() => {
          submitForm(values)
        }
        }
        {...props}
        modifier='manager-registration__form' >
        <h2 className='manager-registration__section-label'>Name</h2>
        <div className='input-group'>
          <Field
            component={Input}
            placeholder='First Name'
            validate={['firstname']}
            name='firstname'
           />
          <Field
            component={Input}
            placeholder='Surname'
            validate={['surname']}
            name='surname'
           />
        </div>
        <h2 className='manager-registration__section-label'>Email</h2>
        <Field
          component={Input}
          placeholder='Enter your email address'
          validate={['email']}
          name='email'
         />
        <h2 className='manager-registration__section-label'>Password</h2>
        <Field
          component={Input}
          placeholder='One capital and lower case letter, one number'
          validate={['password']}
          name='password'
         />
        <div className='manager-registration__checkboxes'>
          <Field
            component={Checkbox}
            label='Are you over 18?'
            validate={['overEighteen']}
            name='overEighteen'
          />
          <Field
            component={Checkbox}
            label='Do you agree to terms and conditions?'
            validate={['termsAndConditions']}
            name='termsAndConditions'
          />
        </div>
        <Submit component={(props) => PrimaryButton({
          ...props,
          text: 'submit',
          className: 'manager-registration__submit'
        })} />
      </Form>
    </div>
  )
}

/**
 *  propTypes
 *  @type {Object}
 */
ManagerRegistration.propTypes = {
  submitForm: PropTypes.func,
  values: PropTypes.object
}

/**
 *  @module ManagerRegistration
 */
export default ManagerRegistration
