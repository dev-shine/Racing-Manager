import React from 'react'

import ConnectedContainer from './index'

import thunk from 'redux-thunk'

import configureMockStore from 'redux-mock-store'

import chai, { expect } from 'chai'

import { mount } from 'enzyme'

import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

describe('Containers - submitUpdateToHorse', () => {
  let wrapper

  const initialState = {
    horse: {
      submitFeedData: {
        text: '',
        maxCharCount: 400,
        files: {},
        charCount: 400
      },
      horseInfo: {
        posted: false
      }
    }
  }

  const mockStore = configureMockStore([thunk])
  const store = mockStore(initialState)
  const options = { context: { store } }

  beforeEach(() => {
    store.clearActions()
    wrapper = mount(<ConnectedContainer store={store} />, options)
  })

  it('should exist', () => {
    expect(wrapper).to.exist
  })
})
