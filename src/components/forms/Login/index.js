/**
 *  @module React
 */
import React from 'react'

import PropTypes from 'prop-types'

import Input from 'components/input/Input'

import TextButton from 'components/buttons/TextButton'

import CtaLink from 'components/links/CtaLink'

import Checkbox from 'components/input/Checkbox'

import SocialButton from 'components/socialmedia/SocialButton'

/**
 *  @module Form, Field
 */
import { Form, Field, Submit } from 'components/forms/BaseForm'

const LoginForm = (props) => {
  const {
    submitForm,
    values
  } = props

  return (
    <div className='login-form'>
      <Form
        className='login-form__form'
        handleSubmit={() => { submitForm(values) }}
        {...props}>

        <div className='form__group'>
          <Field
            component={Input}
            placeholder='EMAIL ADDRESS'
            validate={['email']}
            name='email' />
        </div>
        <div className='form__group'>
          <Field
            component={Input}
            placeholder='PASSWORD'
            validate={['password']}
            name='password' />
        </div>
        <div className='row'>
          <div className='col-xs-12 col-sm-6 align-middle form__group'>
            <Submit
              component={TextButton}
              modifier={['fluid']}
              className='login-form__submit'
              text='login' />
          </div>
          <div className='col-xs-12 col-sm-6 align-middle form__group text-center'>
            <CtaLink
              modifier={['italic']}
              text='Forgotten details' />
          </div>
        </div>
        <div className='form__group'>
          <Checkbox
            label='Keep me logged in'
            name='keepLoggedIn' />
        </div>
        <div className='form__group'>
          <SocialButton
            modifier='facebook'
            text='log in with facebook' />
        </div>
        <div className='form__group'>
          <SocialButton
            modifier='twitter'
            text='log in with twitter' />
        </div>
      </Form>
    </div>
  )
}

export default LoginForm
