/**
 * @module react
 */
import React from 'react'

/**
 *  @module HorseCard
 */
import HorseCard, { Overlay } from 'components/cards/HorseCard'

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

chai.use(chaiEnzyme())

describe('Components - cards - HorseCard', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<HorseCard src='' />)
  })

  it('should exist', () => {
    expect(wrapper).to.exist
  })

  it('should render a banner and overlay if pending', () => {
    wrapper.setProps({
      isPending: true
    })

    expect(wrapper.find('.horse-card__banner')).to.have.length(1)
    expect(wrapper.find(Overlay)).to.have.length(1)
  })
})
