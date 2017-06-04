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
 *  @class
 *  @name FeedSubmitTile
 *  @extends {Component}
 */
class FeedSubmitTile extends Component {
  constructor (props) {
    super(props)

    // Initial state
    this.state = {
      isOpen: false
    }

    // bind custom fn
    this.toggleBar = this.toggleBar.bind(this)
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

  render () {
    const {
      className,
      modifier
    } = this.props

    const {
      isOpen
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
              minHeight={120}
              name='feed-submit-textarea'
              className='feed-submit__textarea-container'
              value=''/>
          </Accordion>
          <div className='feed-submit__bar row' onClick={this.toggleBar}>
            <div className='col-xs-6 col-sm-8 align-middle'>
              <p className='micro feed-submit__bar__text'>
                write a message...
              </p>
            </div>
            <div className='col-xs-6 col-sm-4 align-middle'>
              <div className='row feed-submit__flex'>
                <div className='no-padding col-xs-5 feed-submit__flex feed-submit__flex--align'>
                  <div className='align-middle feed-submit__text-container'>
                    <i className='icon-paperclip'></i>
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
  ])
}

/**
 *  @module FeedSubmitTile
 */
export default FeedSubmitTile
