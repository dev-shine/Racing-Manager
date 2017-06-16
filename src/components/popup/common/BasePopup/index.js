/**
 * @module react
 */
import React, { Component } from 'react'

/**
 *  @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 *  @module CloseButton
 */
import CloseButton from 'components/buttons/CloseButton'

/**
 *  @module CSSTransition group
 */
import { CSSTransitionGroup } from 'react-transition-group'

/**
 *  @module addClass, removeClass
 */
import {
  addClass,
  removeClass
} from 'utils/domutils'

/**
 *  @name BasePopupHoc
 *  @description Higher order component to wrap an children into a popup.
 *  @param  {Component} WrappedComponent
 *  @return {Component}
 */
const BasePopupHoc = WrappedComponent => {
  /**
   *  @class
   *  @name BaseTile
   *  @extends {Component}
   */
  class BasePopup extends Component {
    /**
     *  @constructor
     */
    constructor (props) {
      super(props)

      // Bind custom fns
      this.preventBodyScroll = this.preventBodyScroll.bind(this)
      this.allowBodyScroll = this.allowBodyScroll.bind(this)
    }

    componentDidMount () {
      if (this.props.isOpen) {
        this.preventBodyScroll()
      }
    }

    componentWillReceiveProps (nextProps) {
      if (nextProps.isOpen !== this.props.isOpen) {
        if (nextProps.isOpen) {
          this.preventBodyScroll()
        } else {
          this.allowBodyScroll()
        }
      }
    }

    /**
     *  preventBodyScroll
     *  @description Adds a class on the body to prevent scrolling.
     *  @return {Void}
     */
    preventBodyScroll () {
      addClass(document.body, 'model-open')
    }

    /**
     *  allowBodyScroll
     *  @description Allow the body to scroll.
     *  @return {Void}
     */
    allowBodyScroll () {
      removeClass(document.body, 'model-open')
    }

    /**
     *  @name renderChildren
     *  @return {React.Component || NULL }
     */
    renderChildren () {
      if (this.props.isOpen) {
        return (
          <div className='popup'>
            <div className='popup__bg' onClick={this.props.onClick} />
            <div className='popup__wrapper col-xs-12 col-sm-10 col-sm-push-1 col-md-8 col-md-push-2'>
              <div className='popup__container section-shadow--tile'>
                <CloseButton className='popup__closebutton' onClick={this.props.onClick} />
                <WrappedComponent {...this.props} />
              </div>
            </div>
          </div>
        )
      } else {
        return null
      }
    }

    render () {
      return (
        <CSSTransitionGroup
          transitionName="fade-in"
          transitionEnterTimeout={400}
          transitionLeaveTimeout={400}>
            { this.renderChildren() }
        </CSSTransitionGroup>
      )
    }
  }

  /**
   *  propTypes
   *  @type {Object}
   */
  BasePopup.propTypes = {
    isOpen: PropTypes.bool,
    onClick: PropTypes.func
  }

  /**
   *  defaultProps
   *  @type {Object}
   */
  BasePopup.defaultProps = {
    isOpen: false
  }

  return BasePopup
}

/**
 *  @module BasePopup
 */
export default BasePopupHoc
