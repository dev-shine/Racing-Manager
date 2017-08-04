/**
 *  @module React
 */
import React, { Component } from 'react'

/**
 *  @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 *  @module isInViewport
 */
import { isInViewport } from 'utils/imageutils'

/**
 *  @module throttle
 */
import throttle from 'utils/throttle'

const getTop = (elem) => {
  var box = elem.getBoundingClientRect()
  var body = document.body
  var docEl = document.documentElement

  var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop
  var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft

  var clientTop = docEl.clientTop || body.clientTop || 0
  var clientLeft = docEl.clientLeft || body.clientLeft || 0

  var top = box.top + scrollTop - clientTop
  var left = box.left + scrollLeft - clientLeft

  return { top: Math.round(top), left: Math.round(left) }
}

/**
 *  @class Parallax
 *  @extends {Component}
 */
class Parallax extends Component {
  /**
   * @constructor
   * @param {Object} props
   */
  constructor (props) {
    super(props)

    this.state = {
      position: 0
    }

    // Bind custom functions
    this.getPosition = this.getPosition.bind(this)
    this.scrollHandler = this.scrollHandler.bind(this)
    this.getStartOffset = this.getStartOffset.bind(this)
    this.bindScroll = this.bindScroll.bind(this)
    this.unBindScroll = this.unBindScroll.bind(this)
    this.getOffsetTop = this.getOffsetTop.bind(this)
    this.getElement = this.getElement.bind(this)

    // Bind throttle
    this.throttledScroll = throttle(this.scrollHandler, 0)
  }

  componentDidMount () {
    this.getStartOffset()
    this.bindScroll()
    this.throttledScroll()
  }

  getStartOffset () {
    this.startOffset = this.getOffsetTop().top
  }

  getOffsetTop () {
    return getTop(this.refs.node)
  }

  getElement () {
    return this.refs.node
  }

  bindScroll () {
    window.addEventListener('scroll', this.throttledScroll)
  }

  unBindScroll () {
    window.removeEventListener('scroll', this.throttledScroll)
  }

  getPosition () {
    const {
      speed
    } = this.props

    const pageTop = window.pageYOffset
    const firstTop = this.getOffsetTop().top

    const moveTop = (pageTop - firstTop) / speed
    return moveTop

    /*
    const { scope, offset, speed } = this.props
    const position = ((window.pageYOffset - this.startOffset) * speed)
    return Math.min(-Math.min(scope - offset, position), scope + offset)
    */
  }

  scrollHandler () {
    if (!isInViewport(this.refs.node)) {
      return false
    }

    this.setState({
      position: this.getPosition()
    })
  }

  componentWillUnmount () {
    this.unBindScroll()
    this.throttledScroll = null
  }

  render () {
    // TODO: Make it prefixed
    const style = {
      transform: `translate3d(0, ${this.state.position}px, 0)`
    }

    return React.cloneElement(this.props.children, {style, ref: 'node'})
  }
}

/**
 * propTypes
 * @type { Object }
 */
Parallax.propTypes = {
  children: PropTypes.node.isRequired,
  scope: PropTypes.number,
  speed: PropTypes.number,
  offset: PropTypes.number,
  slowerScrollRate: PropTypes.bool
}

/**
 * defaultProps
 * @type { Object }
 */
Parallax.defaultProps = {
  speed: 0.4,
  scope: 100,
  offset: 0,
  slowerScrollRate: true
}

/**
 *  @module Parallax
 */
export default Parallax
