/**
 * @module react
 */
import React, { Component } from 'react'

/**
 *  @module enhanceWithClickOutside
 */
import enhanceWithClickOutside from 'react-click-outside'

/**
 *  @module CloseButton
 */
import CloseButton from 'components/buttons/CloseButton'

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
    }

    render () {
      return (
        <div className='popup'>
          <div className='popup__container col-xs-12 col-sm-6 col-sm-push-3 col-md-8 col-md-push-2'>
            <CloseButton className='popup__closebutton' onClick={this.props.onClick} />
            <WrappedComponent {...this.props} />
          </div>
        </div>
      )
    }
  }

  return enhanceWithClickOutside(BasePopup)
}

/**
 *  @module BasePopup
 */
export default BasePopupHoc
