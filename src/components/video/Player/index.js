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
 *  @module PlayButton
 */
import PlayButton from 'components/video/Button'

/**
 *  @class
 *  @name Player
 *  @extends {Component}
 */
class Player extends Component {
  constructor (props) {
    super(props)

    // Initial state
    this.state = {
      showPlayButton: false
    }

    // Local variables
    this.videoRef = null

    // Bind custom fns
    this.toggleVideo = this.toggleVideo.bind(this)
  }

  componentDidMount () {
    if (!this.props.autoPlay) {
      this.setState({
        showPlayButton: true
      })
    }
  }

  /**
   *  toggleVideo
   *  @description Will toggle the video between playing and pausing
   *  @return {Void}
   */
  toggleVideo () {
    if (this.state.showPlayButton) {
      this.videoRef.play()
    } else {
      this.videoRef.pause()
    }

    // Inverse the state for the play button
    this.setState(state => ({
      showPlayButton: !state.showPlayButton
    }))
  }

  componentWillReceiveProps (nProps, oProps) {
    if (nProps.autoPlay === oProps.autoPlay) {
      return false
    }

    // Set the state for showing / hiding the play button
    this.setState({
      showPlayButton: !!nProps.autoPlay
    })
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

    const {
      showPlayButton
    } = this.state

    // Constructs classnames from the base name
    const modifiedClassNames = classNames('video', className, modifier)

    return (
      <div className={modifiedClassNames}>
        <video
          onClick={this.toggleVideo}
          ref={ref => { this.videoRef = ref }}
          className='video__player'
          loop={loop}
          preload={preload}
          muted={muted}
          autoPlay={autoPlay}
          playsInline={playsInline}
          src={src}
          poster={poster}>
          {children}
        </video>
        <PlayButton show={showPlayButton} onClick={this.toggleVideo} />
      </div>
    )
  }
}

/**
 *  defaultProps
 *  @type {Object}
 */
Player.defaultProps = {
  className: '',
  modifier: '',
  loop: true,
  preload: 'none',
  autoPlay: false,
  playsInline: true
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
