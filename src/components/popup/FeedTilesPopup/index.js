/**
 *  @module React
 */
import React, { Component } from 'react'

/**
 *  @module BasePopup
 */
import BasePopup from 'components/popup/BasePopup'

/**
 *  @module classNames
 */
import classNames from 'utils/classnames'

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
 *  @class
 *  @name FeedTilesPopup
 *  @extends {Component}
 */
class FeedTilesPopup extends Component {
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
            <TextTile
              className='feed-popup__tile'
              key={`fptext-${createdAt}`}
              id={createdAt}
              name='Andy Jones'
              date={timeStamp}
              text={text} />
          )

        case 'multiplemedia':
          return (
            <MediaCarouselTile
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
            <ImageTile
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
            <VideoTile
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
      modifier
    } = this.props

    // Modified class names for container
    const modifiedClassNames = classNames('feed-popup', className, modifier)

    return (
      <div className={modifiedClassNames}>
        { this.renderTile() }
        <div className='feed-popup__bottom'>
          <div className='col-xs-12 col-sm-10 col-sm-push-1 feed-popup__bottomcontent'>
            <SubmitPost
              feedText='dfdf'
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
 *  @module FeedTilesPopup
 */
export default BasePopup(FeedTilesPopup)
