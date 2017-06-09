/**
 * @module react
 */
import React, { Component } from 'react'

/**
 *  @module baseClassNames
 */
import classNames from 'utils/classnames'

/**
 *  @module BASE_URL
 */
import { ROOT_PATH } from 'api/ServiceTypes'

/**
 *  @module omit
 */
import omit from 'utils/objectutils/omit'

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
        className,
        modifier,
        onClick,
        id
      } = this.props

      /**
       *  @description If large is passed in as a prop, double the size.
       */
      const modifiedClassNames = classNames('base-tile', className, modifier)

      // Remove props not needed for wrapped component
      const modifiedProps = omit(this.props, ['className', 'modifier', 'rootPath', 'onClick'])

      /**
       *  addIdToOnClick
       *  @description Will add the id to the onClick function parameter.
       */
      const addIdToOnClick = () => {
        if (onClick) {
          onClick(id)
        }
      }

      return (
        <div className={modifiedClassNames} style={{...this.props.style}} onClick={addIdToOnClick}>
          <WrappedComponent {...modifiedProps} rootPath={ ROOT_PATH } className='base-tile__content' />
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
