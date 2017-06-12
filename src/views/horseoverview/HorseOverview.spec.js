/**
 * @module react
 */
import React from 'react'

/**
 *  @module FeedGallery
 */
import FeedGallery from 'components/tiles/FeedGallery'

/**
 *  @module FeedSubmitTile
 */
import SubmitPost from 'containers/horseOverview/SubmitPost'

/**
 *  @module AjaxLoader
 */
import AjaxLoader from 'components/ajaxloader'

/**
 *  @module FeedUpdatePopup
 */
import FeedUpdatePopup from 'components/popup/FeedUpdatePopup'

/**
 *  @module HorseOverview
 */
import { HorseOverview } from 'views/horseoverview'

/**
 *  @module expect
 */
import chai, { expect } from 'chai'

/**
 *  @module shallow
 */
import { shallow } from 'enzyme'

/**
 *  @module spy
 */
import { spy } from 'sinon'

/**
 * @module redux-thunk
 */
import thunk from 'redux-thunk'

/**
 * @module redux-mock-store
 */
import configureMockStore from 'redux-mock-store'

/**
 *  @module ChaiEnzyme
 */
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

describe('Views - horseOverview', () => {
  let wrapper
  const props = {
    posted: false,
    data: [{
      createdAt: '12-05-1992',
      postType: 'text',
      text: 'hi',
      timeStamp: 'today'
    }],
    fetching: false,
    posting: false,
    getHorseInfo: spy(),
    match: {
      params: {
        id: 5
      }
    }
  }
  const mockStore = configureMockStore([thunk])

  const store = mockStore({})

  const options = { context: { store } }

  beforeEach(() => {
    wrapper = shallow(<HorseOverview {...props} store={store} />, options)
  })

  it('should exist', () => {
    expect(wrapper).to.exist
  })

  it('First child should have a classname "horse-overview"', () => {
    expect(wrapper.find('.horse-overview')).to.have.length(1)
  })

  it('should have a <SubmitPost /> Component', () => {
    expect(wrapper.find(SubmitPost)).to.have.length(1)
  })

  it('should render a <FeedGallery/> component', () => {
    expect(wrapper.find(FeedGallery)).to.have.length(1)
  })

  it('should render a <FeedUpdatePopup/> component', () => {
    expect(wrapper.find(FeedUpdatePopup)).to.have.length(1)
  })

  it('should not render <AjaxLoader/>', () => {
    expect(wrapper.find(AjaxLoader)).to.have.length(0)
  })

  it('should render <AjaxLoader /> if prop "posting" or "fetching" is set to true', () => {
    let posting = true
    let fetching = false
    wrapper.setProps({
      posting,
      fetching
    })
    expect(wrapper.find(AjaxLoader)).to.have.length(1)

    posting = false
    fetching = true
    wrapper.setProps({
      posting,
      fetching
    })
    expect(wrapper.find(AjaxLoader)).to.have.length(1)
  })

  it('showPopup should be true if closePopup is called', () => {
    wrapper.instance().closePopup()
    expect(wrapper.state().showPopup).to.be.false
  })

  it('showPopup should be true and tileIndex should be 0 if showFeedTilePopup is called with id "12-05-1992"', () => {
    wrapper.instance().showFeedTilePopup(props.data[0].createdAt)
    expect(wrapper.state().showPopup).to.be.true
    expect(wrapper.state().tileIndex).to.equal(0)
  })

  it('should return null on renderAjaxLoader function', () => {
    let posting = false
    let fetching = false
    wrapper.setProps({
      posting,
      fetching
    })
    expect(wrapper.instance().renderAjaxLoader()).to.equal(null)
  })
})
