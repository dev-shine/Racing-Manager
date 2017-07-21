/**
 *  @module React
 */
import React from 'react'

import Input from 'components/input/Input'

import TextButton from 'components/buttons/TextButton'

import CtaLink from 'components/links/CtaLink'

import Checkbox from 'components/input/Checkbox'

import SocialButton from 'components/socialmedia/SocialButton'

import classNames from 'utils/classnames'

import omit from 'utils/objectutils/omit'

import {
  FACEBOOK_LOGIN,
  TWITTER_LOGIN,
  LINKEDIN_LOGIN
} from 'texts/forms'

/**
 *  @module Form, Field
 */
import { Form, Field, Submit } from 'components/forms/BaseForm'

const LoginForm = (props) => {
  const {
    submitForm,
    values,
    className,
    modifier
  } = props

  const modifiedClassNames = classNames('login-form', className, modifier)

  const formProps = omit(props, ['className', 'modifier', 'handleSubmit'])

  return (
    <div className={modifiedClassNames}>
      <Form
        className='login-form__form'
        handleSubmit={() => { submitForm(values) }}
        {...formProps}>

        <div className='form__group'>
          <Field
            component={Input}
            type='email'
            placeholder='EMAIL ADDRESS'
            validate={['email']}
            name='email' />
        </div>
        <div className='form__group'>
          <Field
            component={Input}
            type='password'
            placeholder='PASSWORD'
            validate={['password']}
            name='password' />
        </div>
        <div className='row-sm'>
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
              text={<h6>Forgotten details</h6>} />
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
            text={FACEBOOK_LOGIN} />
        </div>
        <div className='form__group'>
          <SocialButton
            modifier='twitter'
            text={TWITTER_LOGIN} />
        </div>
        <div className='form__group'>
          <SocialButton
            text={LINKEDIN_LOGIN}
            modifier='linked-in' />
        </div>
      </Form>
    </div>
  )
}

export default LoginForm
