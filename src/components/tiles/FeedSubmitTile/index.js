/**
 * @module react
 */
import React, { Component } from 'react'

/**
 * @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 *  @module enhanceWithClickOutside
 */
import enhanceWithClickOutside from 'react-click-outside'

/**
 * @module classNames
 */
import classNames from 'utils/classnames'

/**
 *  @module Accordion
 */
import Accordion from 'components/accordion/BaseAccordion'

/**
 *  @module TextButton
 */
import TextButton from 'components/buttons/TextButton'

/**
 *  @module TextArea
 */
import TextArea from 'components/input/TextArea'

/**
 *  @module Thumbnail
 */
import Thumbnail from 'components/thumbnail'

/**
 *  @module processFileUpload
 */
import processFileUpload from 'utils/processfileupload'

/**
 *  @module Icon
 */
import Icon from 'components/icon'

/**
 *  @module generatethumbnailFromFiles
 */
import { generatethumbnailFromFiles } from 'utils/imageutils'

/**
 *  @name allowedFileTypes
 *  @description File types allowed for uploading.
 *  @type {Array}
 */
const allowedFileTypes = ['image/png', 'image/gif', 'image/jpg', 'image/jpeg', 'video/mp4', 'video/quicktime', 'video/x-msvideo']

/**
 *  @class
 *  @name FeedSubmitTile
 *  @extends {Component}
 */
class FeedSubmitTile extends Component {
  constructor (props) {
    super(props)

    // Initial state
    this.state = {
      isOpen: false,
      thumbnailSrc: ''
    }

    // Bind custom variables
    this.attachmentRef = null

    // bind custom fn
    this.toggleBar = this.toggleBar.bind(this)
    this.addAttachment = this.addAttachment.bind(this)
    this.clearData = this.clearData.bind(this)
    this.clearFileInputValue = this.clearFileInputValue.bind(this)
    this.focusTextField = this.focusTextField.bind(this)
    this.openBar = this.openBar.bind(this)
    this.closeBar = this.closeBar.bind(this)
    this.handleThumbnailDelete = this.handleThumbnailDelete.bind(this)
  }

  componentWillReceiveProps (nextProps, nextState) {
    if (this.props.feedPosted !== nextProps.feedPosted && nextProps.feedPosted) {
      this.clearData()
    }
  }

  /**
   *  clearFileInputValue
   *  @description Clears the input value, so new files can be added.
   */
  clearFileInputValue () {
    if (this.attachmentRef) {
      this.attachmentRef.value = ''
    }
  }

  /**
   *  clearData
   *  @description Will clear the local state
   */
  clearData () {
    this.clearFileInputValue()

    this.setState({
      isOpen: false,
      thumbnailSrc: ''
    })
  }

  /**
   *  toggleBar
   *  @description Toggles visibilty of the text area
   */
  toggleBar () {
    if (this.state.isOpen) {
      this.closeBar()
    } else {
      this.openBar()
    }
  }

  /**
   *  openBar
   */
  openBar () {
    this.setState({
      isOpen: true
    })

    this.focusTextField()
  }

  /**
   *  closeBar
   */
  closeBar () {
    this.setState({
      isOpen: false
    })
  }

  /**
   *  focusTextField
   *  @description Focuses the text area.
   *  @return {Void}
   */
  focusTextField () {
    if (this.refs.textarea) {
      this.refs.textarea.focusField()
    }
  }

  /**
   *  handleClickOutside
   *  @description Custom fn from enhanceClickOutside
   */
  handleClickOutside () {
    if (this.state.isOpen) {
      this.closeBar()
    }
  }

  /**
   *  addAttachment
   *  @param {Object} e
   *  @description Will call on the native file uploader.
   */
  addAttachment (e) {
    processFileUpload(e, allowedFileTypes)
    .then(files => {
      // Open the bar to reveal text area
      this.openBar()

      // Add the media files to the redux store.
      this.props.addFeedMediaFiles(files)

      return generatethumbnailFromFiles(files)
    })
    .then(thumbnails => {
      this.setState({
        thumbnailSrc: thumbnails[0]
      })
    })
    .catch(error => {
      console && console.error(error)
    })
  }

  /**
   *  handleThumbnailDelete
   *  @description Will call an action to delete the thumbnail and clear local state.
   */
  handleThumbnailDelete () {
    this.props.deleteFeedThumbnail()
    this.clearFileInputValue()
    this.setState({
      thumbnailSrc: ''
    })
  }

  render () {
    const {
      className,
      modifier,
      feedText,
      updateFeedText,
      charCount,
      maxCharCount,
      submitFeedUpdate,
      feedFiles
    } = this.props

    const {
      isOpen,
      thumbnailSrc
    } = this.state

    const modifiedClassNames = classNames('feed-submit', className, modifier)

    const canSubmit = isOpen ? (feedText || feedFiles.length) : false

    return (
      <div className={modifiedClassNames}>
        <div className='feed-submit__title'>
          <p className='micro'>
            post an update to the horse
          </p>
        </div>
        <div className='feed-submit__bar-container'>
          <Accordion isOpen={isOpen}>
            <TextArea
              ref='textarea'
              maxLength={maxCharCount}
              minHeight={100}
              name='feed-submit-textarea'
              className='feed-submit__textarea-container'
              handleChange={(e) => { updateFeedText(e.target.value) }}
              value={feedText}/>
            {
              thumbnailSrc &&
              <Thumbnail
                handleDelete={this.handleThumbnailDelete}
                imageSrc={thumbnailSrc}
                className='feed-submit__thumbnail' />
            }
          </Accordion>
          <div className='feed-submit__bar row'>
            <div className='col-xs-6 col-sm-8 align-middle feed-submit__bar__container' onClick={this.openBar}>
              {
                !isOpen
                ? <p className='micro feed-submit__bar__text'>
                    write a message...
                  </p>
                : <p className='micro feed-submit__bar__text feed-submit__bar__text--count'>
                    {charCount}
                  </p>
              }
            </div>
            <div className='col-xs-6 col-sm-4 align-middle'>
              <div className='row feed-submit__flex'>
                <div className='no-padding col-xs-5 feed-submit__flex feed-submit__flex--align'>
                  <div className='align-middle feed-submit__text-container feed-submit__attachment'>
                    <Icon
                      modifier='paperclip' />
                    <input
                      onChange={this.addAttachment}
                      className='feed-submit__attachmentinput'
                      type='file'
                      ref={ref => { this.attachmentRef = ref }}/>
                  </div>
                </div>
                <div className='no-padding col-xs-6 col-xs-push-1'>
                  <TextButton
                    className='feed-submit__button'
                    text='send'
                    isDisabled={!canSubmit}
                    onClick={() => { submitFeedUpdate(feedText, feedFiles) }}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

/**
 *  defaultProps
 *  @type {Object}
 */
FeedSubmitTile.defaultProps = {
  className: '',
  maxCharCount: 400
}

/**
 *  propTypes
 *  @type {Object}
 */
FeedSubmitTile.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  feedText: PropTypes.string,
  submitFeedUpdate: PropTypes.func.isRequired,
  addFeedMediaFiles: PropTypes.func.isRequired,
  updateFeedText: PropTypes.func.isRequired,
  charCount: PropTypes.number,
  maxCharCount: PropTypes.number
}

/**
 *  @module FeedSubmitTile
 */
export default enhanceWithClickOutside(FeedSubmitTile)
