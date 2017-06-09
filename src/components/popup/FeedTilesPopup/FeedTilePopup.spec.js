/**
 * @module react
 */
import React from 'react'

/**
 *  @module TextTile
 */
import TextTile from 'components/tiles/FeedTiles/TextTile'

/**
 *  @module ImageTiles
 */
import ImageTile from 'components/tiles/FeedTiles/ImageTile'

/**
 *  @module VideoTile
 */
import VideoTile from 'components/tiles/FeedTiles/VideoTile'

/**
 *  @module MediaCarouselTile
 */
import MediaCarouselTile from 'components/tiles/FeedTiles/MediaCarouselTile'

/**
 *  @module SubmitPost
 */
import SubmitPost from 'components/tiles/FeedSubmitTile'

/**
 *  @module FeedTilesPopup
 */
import { FeedTilesPopup } from 'components/popup/FeedTilesPopup'

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

describe('Components - FeedTilePopup', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<FeedTilesPopup />)
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
      TextTile,
      ImageTile,
      VideoTile,
      MediaCarouselTile
    ])).to.equal(false)
  })

  it('should render a <TextTile/> component if props with text entry and postType equal to text is defined', () => {
    const tile = {
      postType: 'text',
      text: 'hello'
    }
    wrapper.setProps({ tile })
    expect(wrapper.find(TextTile)).to.have.length(1)
  })

  it('should render an <ImageTile/> component if props with attachment entry and postType equal to image is defined', () => {
    const tile = {
      postType: 'image',
      attachment: [{
        path: 'test.png'
      }]
    }
    wrapper.setProps({ tile })
    expect(wrapper.find(ImageTile)).to.have.length(1)
  })

  it('should render an <VideoTile/> component if props with attachment entry and postType equal to video is defined', () => {
    const tile = {
      postType: 'video',
      attachment: [{
        path: 'test.mp4'
      }]
    }
    wrapper.setProps({ tile })
    expect(wrapper.find(VideoTile)).to.have.length(1)
  })

  it('should render an <MediaCarouselTile/> component if props with attachment entry and postType equal to multiplemedia is defined', () => {
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
    expect(wrapper.find(MediaCarouselTile)).to.have.length(1)
  })
})
