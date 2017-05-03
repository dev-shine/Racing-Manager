/**
 * @module react
 */
import React from 'react'

/**
 * @module SampleButton
 */
import Button from 'components/buttons/Button/Button'

/**
 * @module test
 */
import { SAMPLE_TEXT } from 'texts/test'

/**
 * Testing utilities
 */
import { expect } from 'chai'
import { shallow } from 'enzyme'

describe('Components - Button', () => {
  let wrapper
  beforeEach(() => { wrapper = shallow(<Button />) })

  it('should exist', () => {
    expect(wrapper).to.exist
  })

  it('should contain the text passed to it from "text" prop', () => {
    wrapper.setProps({ text: SAMPLE_TEXT })
    expect(wrapper.text()).to.equal(SAMPLE_TEXT)
  })
})
