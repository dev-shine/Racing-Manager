/**
 * @module react
 */
import React from 'react'

/**
 * @module headerContentStates
 */
import headerContentStates from 'containers/header/HeaderContentStates'

/**
 * Testing utilities
 */
import { expect } from 'chai'
import { shallow } from 'enzyme'

describe('Utils - headerContentStates', () => {
  const defaultProps = {
    location: '#/'
  }

  const renderContent = (props = defaultProps) => {
    const content = headerContentStates(props)
    if (content !== null) {
      return shallow(content)
    } else {
      return content
    }
  }

  it('should render cta button on homepage url', () => {
    const wrapper = renderContent({ location: '#/' })
    expect(wrapper.find('.header__register-button')).to.have.length(1)
  })

  it('should render nothing on unused url', () => {
    const wrapper = renderContent({ location: '#/this-is-useless-url' })
    expect(wrapper).to.equal(null)
  })
})
