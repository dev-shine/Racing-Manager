/**
 * @module react
 */
import React, { Component } from 'react'

/**
 *  @name BaseTileHoc
 *  @description Higher order component to wrap an extra class for base tiles.
 *  @param  {Component} WrappedComponent
 *  @return {Component}
 */
const BaseTileHoc = WrappedComponent => {
  /**
   *  @class
   *  @name BaseTile
   *  @extends {Component}
   */
  return class BaseTile extends Component {
    /**
     *  @constructor
     */
    constructor (props) {
      super(props)
    }

    render () {
      return (
        <WrappedComponent {...this.props} className='base-tile' />
      )
    }
  }
}

/**
 *  @module BaseTileHoc
 */
export default BaseTileHoc
