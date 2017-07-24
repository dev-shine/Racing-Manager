/**
 * @module react
 */
import React from 'react'

import { RegisterForm } from 'components/forms/Register'

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
 *  @module signUpFormValidators
 */
import { registerValidators } from 'utils/validation/Register'

/**
 *  @module Link
 */
import { Link } from 'react-router-dom'

import {
  FIRSTNAME_PLACEHOLDER,
  SURNAME_PLACEHOLDER,
  EMAIL_PLACEHOLDER,
  PASSWORD_PLACEHOLDER,
  AGE_CHECK_PLACEHOLDER,
  USERNAME_PLACEHOLDER
} from 'texts/forms'

/**
 *  @module expect
 */
import chai, { expect } from 'chai'

/**
 *  @module shallow
 */
import { shallow } from 'enzyme'

/**
 *  @module ChaiEnzyme
 */
import chaiEnzyme from 'chai-enzyme'

import { spy } from 'sinon'

chai.use(chaiEnzyme())

describe('Components - forms - Register', () => {
  let wrapper

  const initialProps = {
    onSubmitSuccess: spy(),
    onSubmitFail: spy(),
    values: {
      firstname: '',
      surname: '',
      email: '',
      password: '',
      username: '',
      overEighteen: false,
      termsAndConditions: false,
      isSubmitting: false,
      submitError: false,
    },
    errors: {
      firstname: [],
      surname: [],
      username: [],
      email: [],
      password: [],
      overEighteen: [],
      termsAndConditions: []
    },
    validators: registerValidators,
    canProgress: false,
    update: spy(),
    updateErrors: spy(),
    submitForm: spy()
  }

  beforeEach(() => {
    wrapper = shallow(<RegisterForm {...initialProps} />)
  })

  it('should exist', () => {
    expect(wrapper).to.exist
  })

  it('should have <Form /> component', () => {
    expect(wrapper.find(Form)).to.have.length(1)
  })

  it('should have the 7 <Field /> components', () => {
    expect(wrapper.find(Field)).to.have.length(7)
  })

  it('should have the 1 <Submit /> component', () => {
    expect(wrapper.find(Submit)).to.have.length(1)
  })

  it('should not submit if canProgress prop is false', () => {
    expect(wrapper.instance().props.canProgress).to.equal(false)
    wrapper.find(Submit).simulate('click')
    expect(initialProps.submitForm.calledOnce).to.be.false
  })

  it('should update firstname if firstname field changes', () => {
    console.log(wrapper.find('input').length)
    wrapper.find('input[name="firstname"]').first().simulate('change', { target: { value: 'Nick' } })
    expect(initialProps.update.calledOnce).to.be.true
  })
})
