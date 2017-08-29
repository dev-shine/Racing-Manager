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
 *  @module FeedCommentList
 */
import FeedCommentList from 'components/tiles/FeedCommentList'

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

    this.getTileId = this.getTileId.bind(this)
    this.postComment = this.postComment.bind(this)
  }

  componentDidMount () {
    const messageId = this.getTileId()

    if (messageId) {
      this.props.fetchComments(messageId)
    }
  }

  componentWillReceiveProps (nextProps) {
    // Handle different popup id.
  }

  componentWillUnmount () {
    this.props.clearComments()
  }

  getTileId () {
    const {
      tile
    } = this.props

    if (tile) {
      const {
        _id
      } = tile

      return _id
    }

    return false
  }

  postComment () {
    const messageId = this.getTileId()

    if (messageId) {
      const {
        postComment
      } = this.props

      postComment(messageId)
    }
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
        attachment,
        author
      } = tile

      switch (postType) {
        case 'text':
          return (
            <TextPopupTile
              rootPath={ROOT_PATH}
              className='feed-popup__tile'
              key={`fptext-${createdAt}`}
              id={createdAt}
              name={author}
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
              name={author}
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
              name={author}
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
              name={author}
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
      submitTitle,
      comments,
      updateFeedText,
      clearFeedData,
      commentText,
      charCount,
      commentPosted,
      maxCharCount,
      allowCommenting
    } = this.props

    // Modified class names for container
    const modifiedClassNames = classNames('feed-popup', className, modifier)

    return (
      <div className={modifiedClassNames}>
        { this.renderTile() }
        <div className='feed-popup__bottom section-shadow'>
          {
            allowCommenting
            ? (
                <div className='col-xs-12 feed-popup__bottomcontent'>
                  <SubmitPost
                    allowAttachments={false}
                    title={submitTitle}
                    feedText={commentText}
                    feedPosted={commentPosted}
                    submitFeedUpdate={this.postComment}
                    updateFeedText={updateFeedText}
                    clearFeedData={clearFeedData}
                    charCount={charCount}
                    maxCharCount={maxCharCount} />
              </div>
            )
            : null
          }
          <div className='col-xs-12 feed-popup__comment-list'>
            {
              comments.length
              ? <FeedCommentList comments={comments} />
              : null
            }
          </div>
        </div>
      </div>
    )
  }
}

FeedUpdatePopup.defaultProps = {
  allowCommenting: true
}

/**
 *  @module FeedUpdatePopup
 */
export default BasePopup(FeedUpdatePopup)
