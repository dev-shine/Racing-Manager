/**
 * @module react
 */
import React, { Component } from 'react'

/**
 *  @module BASE_URL
 */
import { ROOT_PATH } from 'api/ServiceTypes'

/**
 *  @name BasePopupTileHOC
 *  @description Higher order component to wrap an extra class for base popup tiles.
 *  @param  {Component} WrappedComponent
 *  @return {Component}
 */
const BasePopupTileHOC = WrappedComponent => {
  /**
   *  @class
   *  @name BasePopupTile
   *  @extends {Component}
   */
  class BasePopupTile extends Component {
    /**
     *  @constructor
     */
    constructor (props) {
      super(props)
    }

    render () {
      return (
        <div className='base-popup-tile'>
          <WrappedComponent {...this.props} rootPath={ ROOT_PATH } className='base-popup-tile__content' />
        </div>
      )
    }
  }

  return BasePopupTile
}

/**
 *  @module BasePopupTileHOC
 */
export default BasePopupTileHOC
