/**
 *  @module React, Component
 */
import React, { Component } from 'react'

/**
 *  @module classNames
 */
import classNames from 'classnames'

/**
 *  @class
 *  @name Block
 *  @extends {Component}
 */
class Block extends Component {
  constructor (props) {
    super(props)

    // Set the default style
    this.defaultStyle = {
      position: `absolute`,
      boxSizing: `border-box`
    }

    // Set the tile outside when initial render
    this.posStyle = {
      top: '-9999px',
      left: '-99999px'
    }

    // Cache the div element
    this.divElement = null

    // Default to false for the block being placed
    this.placed = false
  }

  componentDidUpdate () {
    if (this.placed || !this.props.parent || this.props['data-xkey']) {
      return
    }

    // Flag that the Block has been placed
    this.placed = true
  }

  render () {
    const { width, height, measured, parent, style, className, ...rest } = this.props
    const maxColumns = this.props.parent.columns
    const columns = Math.min(width || 1, maxColumns)

    style.width = Math.floor(columns * this.props.parent.containerWidth / maxColumns)

    const modifiedClasses = classNames({
      'xblock': measured
    }, className)

    return (
      <div data-width={ columns }
        { ...rest }
        style={ { ...this.posStyle, ...style, ...this.defaultStyle } }
        className={modifiedClasses}
        ref = { (x) => { this.divElement = x } }>
        { this.props.children }
      </div>
    )
  }
}

/**
 *  defaultProps
 *  @type {Object}
 */
Block.defaultProps = {
  width: 1,
  measured: false
}

/**
 *  @module Block
 */
export default Block
