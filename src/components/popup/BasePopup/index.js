/**
 * @module react
 */
import React, { Component } from 'react'

/**
 *  @module enhanceWithClickOutside
 */
import enhanceWithClickOutside from 'react-click-outside'

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
          <WrappedComponent {...this.props} />
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
