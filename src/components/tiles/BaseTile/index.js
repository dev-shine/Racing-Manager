/**
 * @module react
 */
import React, { Component } from 'react'

/**
 *  @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 *  @module baseClassNames
 */
import baseClassNames from 'classnames'

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
      const {
        large
      } = this.props

      /**
       *  @description If large is passed in as a prop, double the size.
       *  @type {[type]}
       */
      const modifiedClassNames = baseClassNames('base-tile', 'col-xs-12', {
        'col-sm-3': !large,
        'col-sm-6': large
      })

      return (
        <div className={modifiedClassNames}>
          <WrappedComponent {...this.props} className='base-tile__content' />
        </div>
      )
    }
  }

  /**
   *  propTypes
   *  @type {Object}
   */
  BaseTile.propTypes = {
    large: PropTypes.bool
  }

  /**
   *  defaultProps
   *  @type {Object}
   */
  BaseTile.defaultProps = {
    large: false
  }

  return BaseTile
}

/**
 *  @module BaseTileHoc
 */
export default BaseTileHoc
