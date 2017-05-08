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
    <div>
      <Form
        handleSubmit={() => {
          submitForm(values)
        }
        }
        {...props}
        modifier='manager-registration__form' >
        <Field
          component={Input}
          placeholder='Name'
          validate={['firstname']}
          name='firstname'
         />
        <Field
          component={Input}
          placeholder='Surname'
          validate={['surname']}
          name='surname'
         />
        <Field
          component={Input}
          placeholder='Email'
          validate={['email']}
          name='email'
         />
        <Field
          component={Input}
          placeholder='Password'
          validate={['password']}
          name='password'
         />
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
