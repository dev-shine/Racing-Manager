/**
 * @module react
 */
import React from 'react'

/**
 *  @module TextPopupTile
 */
import TextPopupTile from 'components/tiles/FeedPopupTiles/TextPopupTile'

/**
 *  @module ImagePopupTile
 */
import ImagePopupTile from 'components/tiles/FeedPopupTiles/ImagePopupTile'

/**
 *  @module VideoPopupTile
 */
import VideoPopupTile from 'components/tiles/FeedPopupTiles/VideoPopupTile'

/**
 *  @module MediaCarouselPopupTile
 */
import MediaCarouselPopupTile from 'components/tiles/FeedPopupTiles/MediaCarouselPopupTile'

/**
 *  @module SubmitPost
 */
import SubmitPost from 'components/tiles/FeedSubmitTile'

/**
 *  @module FeedUpdatePopup
 */
import { FeedUpdatePopup } from 'components/popup/FeedUpdatePopup'

/**
 *  @module expect
 */
import chai, { expect } from 'chai'

/**
 *  @module shallow
 */
import { mount } from 'enzyme'

/**
 *  @module ChaiEnzyme
 */
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

describe('Components - FeedUpdatePopup', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<FeedUpdatePopup />)
  })

  it('should exist', () => {
    expect(wrapper).to.exist
  })

  it('First child should have a classname "feed-popup"', () => {
    expect(wrapper.find('.feed-popup')).to.have.length(1)
  })

  it('should have a <SubmitPost /> Component', () => {
    expect(wrapper.find(SubmitPost)).to.have.length(1)
  })

  it('should not render any tiles', () => {
    expect(wrapper.containsAnyMatchingElements([
      TextPopupTile,
      ImagePopupTile,
      VideoPopupTile,
      MediaCarouselPopupTile
    ])).to.equal(false)
  })

  it('should render a <TextPopupTile/> component if props with text entry and postType equal to text is defined', () => {
    const tile = {
      postType: 'text',
      text: 'hello'
    }
    wrapper.setProps({ tile })
    expect(wrapper.find(TextPopupTile)).to.have.length(1)
  })

  it('should render an <ImagePopupTile/> component if props with attachment entry and postType equal to image is defined', () => {
    const tile = {
      postType: 'image',
      attachment: [{
        path: 'test.png'
      }]
    }
    wrapper.setProps({ tile })
    expect(wrapper.find(ImagePopupTile)).to.have.length(1)
  })

  it('should render an <VideoPopupTile/> component if props with attachment entry and postType equal to video is defined', () => {
    const tile = {
      postType: 'video',
      attachment: [{
        path: 'test.mp4'
      }]
    }
    wrapper.setProps({ tile })
    expect(wrapper.find(VideoPopupTile)).to.have.length(1)
  })

  it('should render an <MediaCarouselPopupTile/> component if props with attachment entry and postType equal to multiplemedia is defined', () => {
    const tile = {
      postType: 'multiplemedia',
      attachment: [{
        path: 'test.mp4',
        type: 'video'
      },
      {
        path: 'image.png',
        type: 'image'
      }]
    }
    wrapper.setProps({ tile })
    expect(wrapper.find(MediaCarouselPopupTile)).to.have.length(1)
  })
})
