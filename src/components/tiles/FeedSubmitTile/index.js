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
 *  @class
 *  @name FeedSubmitTile
 *  @extends {Component}
 */
class FeedSubmitTile extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const {
      className,
      modifier
    } = this.props

    const modifiedClassNames = classNames('feed-submit', className, modifier)

    return (
      <div className={modifiedClassNames}>
        <div className='feed-submit__title'>
          <p className='micro'>
            post an update to the syndicate
          </p>
        </div>
        <div className='feed-submit__bar-container'>
          <Accordion>
          </Accordion>
          <div className='feed-submit__bar row'>
            <div className='col-xs-8 align-middle'>
              <p className='micro feed-submit__bar__text'>
                write a message...
              </p>
            </div>
            <div className='col-xs-4 align-middle'>
              <div className='row'>
                <div className='col-xs-6 col-xs-push-6 col-md-4 col-md-push-8 no-padding'>
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
