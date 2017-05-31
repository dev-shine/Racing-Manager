/**
 *  @module React
 */
import React, { Component } from 'react'

/**
 *  @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 *  @module classNames
 */
import classNames from 'utils/classnames'

/**
 *  @class
 *  @name Player
 *  @extends {Component}
 */
class Player extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const {
      children,
      className,
      modifier,
      loop,
      muted,
      autoPlay,
      playsInline,
      src,
      poster,
      preload
    } = this.props

    // Constructs classnames from the base name
    const modifiedClassNames = classNames('video-player', className, modifier)

    return (
      <video
        className={modifiedClassNames}
        loop={loop}
        preload={preload}
        muted={muted}
        autoPlay={autoPlay}
        playsInline={playsInline}
        src={src}
        poster={poster}>
        {children}
      </video>
    )
  }
}

/**
 *  defaultProps
 *  @type {Object}
 */
Player.defaultProps = {
  className: '',
  modifier: ''
}

/**
 *  propTypes
 *  @type {Object}
 */
Player.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  autoPlay: PropTypes.bool,
  playsInline: PropTypes.bool,
  src: PropTypes.string,
  poster: PropTypes.string,
  preload: PropTypes.oneOf([
    'auto', 'metadata', 'none'
  ])
}

/**
 *  @module Player
 */
export default Player
