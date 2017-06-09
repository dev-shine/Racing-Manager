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
// import TextTile from 'components/tiles/FeedTiles/TextTile'

/**
 *  @module ImageTiles
 */
import ImageTile from 'components/tiles/FeedTiles/ImageTile'

/**
 *  @module VideoTile
 */
// import VideoTile from 'components/tiles/FeedTiles/VideoTile'

/**
 *  @module MediaCarouselTile
 */
// import MediaCarouselTile from 'components/tiles/FeedTiles/MediaCarouselTile'

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
    if (this.props.tile) {
      return (
        <ImageTile
          className='feed-popup__tile'
          key={`image-${this.props.tile.createdAt}`}
          src={this.props.tile.attachment[0].path}
          name='Andy Jones'
          date={this.props.tile.timeStamp}
          text={this.props.tile.text}
          onClick={this.props.onClick} />
      )
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
