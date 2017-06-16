/**
 *  @module React
 */
import React, { Component } from 'react'

/**
 *  @module BasePopup
 */
import BasePopup from 'components/popup/common/BasePopup'

/**
 *  @module classNames
 */
import classNames from 'utils/classnames'

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
 *  @module BASE_URL
 */
import { ROOT_PATH } from 'api/ServiceTypes'

/**
 *  @class
 *  @name FeedUpdatePopup
 *  @extends {Component}
 */
export class FeedUpdatePopup extends Component {
  /**
   *  @constructor
   */
  constructor (props) {
    super(props)
  }

  /**
   *  renderTile
   *  @description Will render the correct feed tile.
   *  @return {Component}
   */
  renderTile () {
    const {
      tile
    } = this.props

    if (tile) {
      const {
        postType,
        createdAt,
        timeStamp,
        text,
        attachment
      } = tile

      switch (postType) {
        case 'text':
          return (
            <TextPopupTile
              rootPath={ROOT_PATH}
              className='feed-popup__tile'
              key={`fptext-${createdAt}`}
              id={createdAt}
              name='Andy Jones'
              date={timeStamp}
              text={text} />
          )

        case 'multiplemedia':
          return (
            <MediaCarouselPopupTile
              rootPath={ROOT_PATH}
              className='feed-popup__tile'
              key={`fpiv-${createdAt}`}
              id={createdAt}
              name='Andy Jones'
              date={timeStamp}
              text={text}
              attachments={attachment} />
          )

        case 'image':
          return (
            <ImagePopupTile
              rootPath={ROOT_PATH}
              className='feed-popup__tile'
              key={`fpimage-${createdAt}`}
              id={createdAt}
              src={attachment[0].path}
              name='Andy Jones'
              date={timeStamp}
              text={text} />
          )

        case 'video':
          return (
            <VideoPopupTile
              rootPath={ROOT_PATH}
              className='feed-popup__tile'
              key={`fpvideo-${createdAt}`}
              id={createdAt}
              src={attachment[0].path}
              poster={attachment[0].thumbnail}
              name='Andy Jones'
              date={timeStamp}
              text={text} />
          )
      }
    }

    return null
  }

  render () {
    const {
      className,
      modifier,
      submitTitle
    } = this.props

    // Modified class names for container
    const modifiedClassNames = classNames('feed-popup', className, modifier)

    return (
      <div className={modifiedClassNames}>
        { this.renderTile() }
        <div className='feed-popup__bottom section-shadow'>
          <div className='col-xs-12 feed-popup__bottomcontent'>
            <SubmitPost
              title={submitTitle}
              feedText={''}
              submitFeedUpdate={() => {}}
              addFeedMediaFiles={() => {}}
              updateFeedText={() => {}}
              charCount={400}
              maxCharCount={400}
              horseId={20} />
          </div>
        </div>
      </div>
    )
  }
}

/**
 *  @module FeedUpdatePopup
 */
export default BasePopup(FeedUpdatePopup)
