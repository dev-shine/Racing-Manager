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

/**
 *  @module getTop
 */
import { getTop, testForPassiveScroll } from 'utils/domutils'

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

    this.mounted = false
    this.hasPassiveEvents = testForPassiveScroll()

    // Bind custom functions
    this.getPosition = this.getPosition.bind(this)
    this.scrollHandler = this.scrollHandler.bind(this)
    this.bindScroll = this.bindScroll.bind(this)
    this.unBindScroll = this.unBindScroll.bind(this)
    this.getOffsetTop = this.getOffsetTop.bind(this)
    this.getElement = this.getElement.bind(this)
    this.getParentOffsetTop = this.getParentOffsetTop.bind(this)
    this.getParentElement = this.getParentElement.bind(this)

    // Bind throttle
    this.throttledScroll = throttle(this.scrollHandler, 0)
  }

  componentDidMount () {
    this.mounted = true

    this.bindScroll()
    this.throttledScroll()
  }

  getOffsetTop () {
    return getTop(this.getElement()).top
  }

  getParentOffsetTop () {
    return getTop(this.getParentElement()).top
  }

  getElement () {
    return this.refs.node
  }

  getParentElement () {
    return this.getElement().parentElement
  }

  bindScroll () {
    window.addEventListener('scroll', this.throttledScroll, this.hasPassiveEvents ? { passive: true } : false)
    window.addEventListener('resize', this.throttledScroll)
  }

  unBindScroll () {
    window.removeEventListener('scroll', this.throttledScroll, this.hasPassiveEvents ? { passive: true } : false)
    window.removeEventListener('resize', this.throttledScroll)
  }

  getPosition () {
    const {
      speed,
      scope
    } = this.props

    const scrollY = window.pageYOffset

    const parentElement = this.getParentElement()

    const d = (scrollY - parentElement.offsetTop) * speed / scope

    return (d * 100)
  }

  scrollHandler () {
    if (!this.mounted) {
      return false
    }

    if (!isInViewport(this.getParentElement())) {
      return false
    }

    this.setState({
      position: this.getPosition()
    })
  }

  componentWillUnmount () {
    this.mounted = false
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
  offset: PropTypes.number
}

/**
 * defaultProps
 * @type { Object }
 */
Parallax.defaultProps = {
  speed: 0.75,
  scope: 400
}

/**
 *  @module Parallax
 */
export default Parallax
