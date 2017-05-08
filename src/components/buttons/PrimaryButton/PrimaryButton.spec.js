/**
 * @module react
 */
import React from 'react'

/**
 * @module PrimaryButton
 */
import PrimaryButton from 'components/buttons/PrimaryButton/PrimaryButton'

/**
 * @module test
 */
import { SAMPLE_TEXT } from 'texts/test'

/**
 * Testing utilities
 */
import { expect } from 'chai'
import { shallow } from 'enzyme'

describe('Components - PrimaryButton', () => {
  let wrapper
  beforeEach(() => { wrapper = shallow(<PrimaryButton />) })

  it('should exist', () => {
    expect(wrapper).to.exist
  })

  it('should contain the text passed to it from "text" prop', () => {
    wrapper.setProps({ text: SAMPLE_TEXT })
    expect(wrapper.text()).to.equal(SAMPLE_TEXT)
  })
})
