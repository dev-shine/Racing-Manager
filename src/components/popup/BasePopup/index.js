/**
 * @module react
 */
import React, { Component } from 'react'

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

      this.state = {
        isOpen: true
      }

      this.onClick = this.onClick.bind(this)
    }

    componentDidMount () {
      addClass(document.body, 'model-open')
    }

    onClick () {
      this.setState(state => ({
        isOpen: !state.isOpen
      }))

      if (this.state.isOpen) {
        removeClass(document.body, 'model-open')
      }

      if (this.props.onClick) {
        this.props.onClick()
      }
    }

    /**
     *  @name renderChildren
     *  @return {React.Component || NULL }
     */
    renderChildren () {
      if (this.state.isOpen) {
        return (
          <div className='popup'>
            <div className='popup__wrapper col-xs-12 col-sm-10 col-sm-push-1 col-md-8 col-md-push-2'>
              <div className='popup__container'>
                <CloseButton className='popup__closebutton' onClick={this.onClick} />
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

  return BasePopup
}

/**
 *  @module BasePopup
 */
export default BasePopupHoc
