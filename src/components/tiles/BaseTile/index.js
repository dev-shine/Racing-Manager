/**
 * @module react
 */
import React, { Component } from 'react'

/**
 *  @module baseClassNames
 */
import baseClassNames from 'classnames'

/**
 *  @module BASE_URL
 */
import { ROOT_PATH } from 'api/ServiceTypes'

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
  class BaseTile extends Component {
    /**
     *  @constructor
     */
    constructor (props) {
      super(props)
    }

    render () {
      /**
       *  @description If large is passed in as a prop, double the size.
       *  @type {[type]}
       */
      const modifiedClassNames = baseClassNames('base-tile')

      return (
        <div className={modifiedClassNames} style={{...this.props.style}}>
          <WrappedComponent {...this.props} rootPath={ ROOT_PATH } className='base-tile__content' />
        </div>
      )
    }
  }

  return BaseTile
}

/**
 *  @module BaseTileHoc
 */
export default BaseTileHoc
