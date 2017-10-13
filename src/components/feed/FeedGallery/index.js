/**
 *  @module react
 */
import React, { Component } from 'react'

/**
 *  @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 *  @module TextTile
 */
import TextTile from 'components/feed/FeedTiles/TextTile'

/**
 *  @module ImageTiles
 */
import ImageTile from 'components/feed/FeedTiles/ImageTile'

/**
 *  @module VideoTile
 */
import VideoTile from 'components/feed/FeedTiles/VideoTile'

/**
 *  @module MediaCarouselTile
 */
import MediaCarouselTile from 'components/feed/FeedTiles/MediaCarouselTile'

/**
 *  @module Block, Grid
 */
import { Block, Grid } from 'components/layouts/masonry'

/**
 *  @module FeedUpdatePopup
 */
import FeedUpdatePopupContainer from 'containers/Feed/FeedUpdatePopupContainer'

/**
 *  @class
 *  @name FeedGallery
 *  @extends { Component }
 */
class FeedGallery extends Component {
  /**
   *  @constructor
   *  @param  {Object} props
   */
  constructor (props) {
    super(props)

    // Initial state
    this.state = {
      id: null,
      showPopup: false,
    }

    // Bind this
    this.renderChildren = this.renderChildren.bind(this)
    this.showFeedTilePopup = this.showFeedTilePopup.bind(this)
    this.closePopup = this.closePopup.bind(this)
    this.handleTileClick = this.handleTileClick.bind(this)
  }

  /**
   *  showFeedTilePopup
   *  @description Will get the correct index in the data array of the selected tile
   *               Will set the popup to be true.
   *  @param  {String} id
   */
  showFeedTilePopup (id) {
    if (!id || !this.props.allowPopups) {
      return false
    }

    // Set the new tile's id
    this.setState({
      id,
      showPopup: true
    })
  }

  /**
   *  closePopup
   *  @description Will hide the popup by setting the showPopup to false
   */
  closePopup () {
    this.setState({
      showPopup: false,
      id: null
    })
  }

  /**
   *  handleTileClick
   *  @param  {Number} id
   */
  handleTileClick (id) {
    const {
      onClick
    } = this.props

    // show the popup according to the tile.
    this.showFeedTilePopup(id)

    // If there is a onClick in props, fire it.
    if (onClick) {
      onClick(id)
    }
  }

  /**
   *  renderChildren
   *  @param  {Object} tile
   *  @return {Component}
   */
  renderChildren (tile) {
    const {
      _id,
      postType = 'text',
      createdAt,
      timeStamp,
      text,
      attachment,
      author
    } = tile

    // Switch between the post type.
    switch (postType) {
      case 'text':
        return (
          <TextTile
            key={`text-${createdAt}`}
            id={_id}
            name={author}
            date={timeStamp}
            text={text}
            onClick={this.handleTileClick} />
        )

      case 'multiplemedia':
        return (
          <MediaCarouselTile
            key={`iv-${createdAt}`}
            id={_id}
            name={author}
            date={timeStamp}
            text={text}
            attachments={attachment}
            onClick={this.handleTileClick} />
        )

      case 'image':
        return (
          <ImageTile
            key={`image-${createdAt}`}
            id={_id}
            src={attachment[0].path}
            name={author}
            date={timeStamp}
            text={text}
            onClick={this.handleTileClick} />
        )

      case 'video':
        return (
          <VideoTile
            key={`video-${createdAt}`}
            id={_id}
            src={attachment[0].path}
            poster={attachment[0].thumbnail}
            name={author}
            date={timeStamp}
            text={text}
            onClick={this.handleTileClick} />
        )
    }
  }

  render () {
    const {
      tiles,
      popupTitle,
      allowCommenting
    } = this.props

    const {
      showPopup,
      id
    } = this.state

    return (
      <span>
        <Grid
          targetBlockWidth={390}
          center={false}
          maxColumns={3}>
          {
            tiles.map(tile => {
              return (
                <Block width={1} key={tile._id}>
                  {this.renderChildren(tile)}
                </Block>
              )
            })
          }
        </Grid>
        <FeedUpdatePopupContainer
          allowCommenting={allowCommenting}
          submitTitle={popupTitle}
          isOpen={showPopup}
          onClick={this.closePopup}
          tileId={id}
          tiles={tiles} />
      </span>
    )
  }
}

/**
 *  propTypes
 *  @type {Object}
 */
FeedGallery.propTypes = {
  tiles: PropTypes.array,
  onClick: PropTypes.func,
  popupTitle: PropTypes.string,
  allowPopups: PropTypes.bool
}

/**
 *  defaultProps
 *  @type {Object}
 */
FeedGallery.defaultProps = {
  tiles: [],
  popupTitle: 'comment on this post',
  allowPopups: true
}

/**
 *  @module FeedGallery
 */
export default FeedGallery
