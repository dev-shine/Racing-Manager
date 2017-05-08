/**
 * @module React
 */
import React from 'react'

/**
 * @module ParallaxHero
 */
import ParallaxHero from 'components/home/hero/ParallaxHero'

/**
 * Testing utilities
 */
import chai, { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import { spy } from 'sinon'

/**
 * Required properties
 * @type { Object }
 */
const requiredProps = {
  featuredImage: ''
}

describe('<ParallaxHero />', () => {
  let wrapper
  beforeEach(() => { wrapper = mount(<ParallaxHero {...requiredProps} />) })

  it('should exist', () => {
    expect(wrapper).to.exist
  })

  it('should have <Parallax /> component', () => {
    expect(wrapper.find('Parallax').length).to.equal(1)
  })

  it('should contain passed class to it from className prop', () => {
    const className = 'sample-class'
    wrapper.setProps({ className })
    expect(wrapper.hasClass(className)).to.equal(true)
  })
})
