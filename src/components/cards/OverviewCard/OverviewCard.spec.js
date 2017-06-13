/**
 * @module react
 */
import React from 'react'

/**
 *  @module OverviewCard
 */
import OverviewCard, { Overlay } from 'components/cards/OverviewCard'

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

describe('Components - cards - OverviewCard', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<OverviewCard src='' />)
  })

  it('should exist', () => {
    expect(wrapper).to.exist
  })

  it('should render a banner and overlay if pending', () => {
    wrapper.setProps({
      isPending: true
    })

    expect(wrapper.find('.overview-card__banner')).to.have.length(1)
    expect(wrapper.find(Overlay)).to.have.length(1)
  })
})
