/**
 * @module react
 */
import React, { Component } from 'react'

/**
 * @module PropTypes
 */
import PropTypes from 'prop-types'

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
 *  @module Image
 */
import Image from 'components/image'

/**
 *  @module fileUpload
 */
import mediaPayload from 'utils/mediapayload'

/**
 *  @name allowedFileTypes
 *  @description File types allowed for uploading.
 *  @type {Array}
 */
const allowedFileTypes = ['image/png', 'image/jpg', 'image/jpeg']

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
  }

  /**
   *  toggleBar
   *  @description Toggles visibilty of the text area
   */
  toggleBar () {
    this.setState(state => ({
      isOpen: !state.isOpen
    }))

    if (!this.state.isOpen) {
      this.refs.textarea.focusField()
    }
  }

  /**
   *  addAttachment
   *  @param {Object} e
   *  @description Will call on the native file uploader.
   */
  addAttachment (e) {
    mediaPayload(e, allowedFileTypes)
    .then(({formData, thumbnails}) => {
      console && console.log(JSON.stringify(formData))
      this.setState({
        thumbnailSrc: thumbnails[0]
      })
    })
    .catch(error => {
      console && console.error(error)
    })
  }

  render () {
    const {
      className,
      modifier // ,
      // thumbnailSrc
    } = this.props

    const {
      isOpen,
      thumbnailSrc
    } = this.state

    const modifiedClassNames = classNames('feed-submit', className, modifier)

    return (
      <div className={modifiedClassNames}>
        <div className='feed-submit__title'>
          <p className='micro'>
            post an update to the syndicate
          </p>
        </div>
        <div className='feed-submit__bar-container'>
          <Accordion isOpen={isOpen}>
            <TextArea
              ref='textarea'
              minHeight={100}
              name='feed-submit-textarea'
              className='feed-submit__textarea-container'
              value=''/>
            { thumbnailSrc && <Image userCanRemove={true} imageSrc={thumbnailSrc} className='feed-submit__thumbnail' /> }
          </Accordion>
          <div className='feed-submit__bar row'>
            <div className='col-xs-6 col-sm-8 align-middle' onClick={this.toggleBar}>
              {
                !isOpen
                ? <p className='micro feed-submit__bar__text'>
                    write a message...
                  </p>
                : <p className='micro feed-submit__bar__text feed-submit__bar__text--count'>
                    Max 400 characters
                  </p>
              }
            </div>
            <div className='col-xs-6 col-sm-4 align-middle'>
              <div className='row feed-submit__flex'>
                <div className='no-padding col-xs-5 feed-submit__flex feed-submit__flex--align'>
                  <div className='align-middle feed-submit__text-container feed-submit__attachment'>
                    <i className='icon-paperclip'></i>
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
                    onClick={() => {}}/>
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
  className: ''
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
  thumbnailSrc: PropTypes.string
}

/**
 *  @module FeedSubmitTile
 */
export default FeedSubmitTile
