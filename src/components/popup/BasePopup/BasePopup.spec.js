/**
 * @module react
 */
import React from 'react'

/**
 * @module Footer
 */
import BasePopup from 'components/popup/BasePopup'

/**
 *  @module expect
 */
import { expect } from 'chai'

/**
 *  @module shallow
 */
import { shallow } from 'enzyme'

describe('HOC - BasePopup', () => {
  let wrapper

  beforeEach(() => {
    let WrappedComponent = BasePopup(<div />)
    wrapper = shallow(<WrappedComponent />)
  })

  it('should exist', () => {
    expect(wrapper).to.exist
  })
})
