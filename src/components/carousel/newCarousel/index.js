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
import classNames from 'classnames'

/**
 *  dummy function
 */
const noop = () => {}

/**
 *  @name Carousel
 *  @class
 *  @extends {Component}
 */
class Carousel extends Component {
  /**
   *  constructor
   */
  constructor (props) {
    super(props)

    // Set initial state
    this.state = {
      currentSlide: props.slideIndex,
      dragging: false,
      frameWidth: 0,
      left: 0,
      slideCount: 0,
      slidesToScroll: props.slidesToScroll,
      slideWidth: 0,
      top: 0,
      animate: false
    }

    // Bind custom fns
    this.getListStyles = this.getListStyles.bind(this)
    this.getFrameStyles = this.getFrameStyles.bind(this)
    this.getSlideStyles = this.getSlideStyles.bind(this)
    this.getSliderStyles = this.getSliderStyles.bind(this)
    this.getTouchEvents = this.getTouchEvents.bind(this)
    this.getMouseEvents = this.getMouseEvents.bind(this)
    this.handleMouseOver = this.handleMouseOver.bind(this)
    this.handleMouseOut = this.handleMouseOut.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleSwipe = this.handleSwipe.bind(this)
    this.swipeDirection = this.swipeDirection.bind(this)
    this.autoplayIterator = this.autoplayIterator.bind(this)
    this.startAutoplay = this.startAutoplay.bind(this)
    this.resetAutoplay = this.resetAutoplay.bind(this)
    this.stopAutoplay = this.stopAutoplay.bind(this)
    this.goToSlide = this.goToSlide.bind(this)
    this.nextSlide = this.nextSlide.bind(this)
    this.prevSlide = this.prevSlide.bind(this)
    this.animateSlide = this.animateSlide.bind(this)
    this.getTargetLeft = this.getTargetLeft.bind(this)
    this.bindEvents = this.bindEvents.bind(this)
    this.onResize = this.onResize.bind(this)
    this.onReadyStateChange = this.onReadyStateChange.bind(this)
    this.unbindEvents = this.unbindEvents.bind(this)
    this.formatChildren = this.formatChildren.bind(this)
    this.setInitialDimensions = this.setInitialDimensions.bind(this)
    this.setDimensions = this.setDimensions.bind(this)
    this.setLeft = this.setLeft.bind(this)
    this.setExternalData = this.setExternalData.bind(this)
    this.getSlideTargetPosition = this.getSlideTargetPosition.bind(this)

    // Custom vars
    this.touchObject = {}
    this.clickSafe = true
    this.animateTimeout = null
  }

  componentWillMount () {
    this.setInitialDimensions()
  }

  componentDidMount () {
    this.setDimensions()
    this.bindEvents()
    this.setExternalData()

    if (this.props.autoplay) {
      this.startAutoplay()
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      slideCount: nextProps.children.length
    })

    this.setDimensions(nextProps)

    if (this.props.slideIndex !== nextProps.slideIndex && nextProps.slideIndex !== this.state.currentSlide) {
      this.goToSlide(nextProps.slideIndex)
    }

    if (this.props.autoplay !== nextProps.autoplay) {
      if (nextProps.autoplay) {
        this.startAutoplay()
      } else {
        this.stopAutoplay()
      }
    }
  }

  componentWillUnmount () {
    this.unbindEvents()
    this.stopAutoplay()
  }

  /**
   *  getListStyles
   *  @description Will set the styles on the moving slider list.
   *  @return {Object}
   */
  getListStyles () {
    const {
      children,
      cellSpacing
    } = this.props

    const {
      slideWidth,
      left,
      top
    } = this.state

    const listWidth = slideWidth * React.Children.count(children)
    const spacingOffset = cellSpacing * React.Children.count(children)
    const transform = `translate3d(${left}px, ${top}px, 0)`
    const msTransform = `translate(${left}px, ${top}px)`

    return {
      transform,
      WebkitTransform: transform,
      msTransform,
      margin: this.props.vertical ? (this.props.cellSpacing / 2) * -1 + 'px 0px'
                                  : '0px ' + (this.props.cellSpacing / 2) * -1 + 'px',
      // height: this.props.vertical ? listWidth + spacingOffset : this.state.slideHeight,
      width: this.props.vertical ? 'auto' : listWidth + spacingOffset,
      cursor: this.state.dragging === true ? 'pointer' : 'inherit'
    }
  }

  /**
   *  getFrameStyles
   *  @description Returns styles for the frame of the carousel
   *  @return {Object}
   */
  getFrameStyles () {
    const {
      frameOverflow,
      vertical,
      framePadding
    } = this.props

    const {
      frameWidth
    } = this.state

    return {
      overflow: frameOverflow,
      height: vertical ? frameWidth || 'initial' : 'auto',
      margin: framePadding
    }
  }

  /**
   *  getSlideStyles
   *  @description Get the styles for each slide.
   *  @param  {Number} index
   *  @param  {Number} positionValue
   *  @return {Object}
   */
  getSlideStyles (index, positionValue) {
    // const targetPosition = this.getSlideTargetPosition(index, positionValue)

    const {
      vertical,
      cellSpacing
    } = this.props

    const {
      slideWidth
    } = this.state

    return {
      // left: vertical ? 0 : targetPosition,
      // top: vertical ? targetPosition : 0,
      display: vertical ? 'block' : 'inline-block',
      width: vertical ? '100%' : slideWidth,
      marginLeft: vertical ? 'auto' : cellSpacing / 2,
      marginRight: vertical ? 'auto' : cellSpacing / 2,
      marginTop: vertical ? cellSpacing / 2 : 'auto',
      marginBottom: vertical ? cellSpacing / 2 : 'auto'
    }
  }

  /**
   *  getSliderStyles
   *  @return {Object}
   */
  getSliderStyles () {
    const {
      width
    } = this.props

    const {
      slideWidth
    } = this.state

    return {
      width: width,
      visibility: slideWidth ? 'visible' : 'hidden'
    }
  }

  /**
   *  getTouchEvents
   *  @description Will create touch events for moving the carousel on mobile.
   *  @return {Object}
   */
  getTouchEvents () {
    const {
      swiping
    } = this.props

    if (swiping === false) {
      return null
    }

    return {
      onTouchStart: (e) => {
        clearTimeout(this.animateTimeout)

        this.touchObject = {
          startX: e.touches[0].pageX,
          startY: e.touches[0].pageY
        }
        this.handleMouseOver()
      },
      onTouchMove: (e) => {
        const direction = this.swipeDirection(
          this.touchObject.startX,
          e.touches[0].pageX,
          this.touchObject.startY,
          e.touches[0].pageY
        )

        if (direction !== 0) {
          e.preventDefault()
        }

        const length = this.props.vertical ? Math.round(Math.sqrt(Math.pow(e.touches[0].pageY - this.touchObject.startY, 2)))
                                           : Math.round(Math.sqrt(Math.pow(e.touches[0].pageX - this.touchObject.startX, 2)))

        this.touchObject = {
          startX: this.touchObject.startX,
          startY: this.touchObject.startY,
          endX: e.touches[0].pageX,
          endY: e.touches[0].pageY,
          length: length,
          direction: direction
        }

        this.setState({
          left: this.props.vertical ? 0 : this.getTargetLeft(this.touchObject.length * this.touchObject.direction),
          top: this.props.vertical ? this.getTargetLeft(this.touchObject.length * this.touchObject.direction) : 0,
          animate: false
        })
      },
      onTouchEnd: (e) => {
        this.handleSwipe(e)
        this.handleMouseOut()
      },
      onTouchCancel: (e) => {
        this.handleSwipe(e)
      }
    }
  }

  /**
   *  getMouseEvents
   *  @description Bind mouse events for moving the carousel
   *  @return {Object}
   */
  getMouseEvents () {
    const {
      dragging
    } = this.props

    if (dragging === false) {
      return null
    }

    return {
      onMouseOver: () => {
        this.handleMouseOver()
      },
      onMouseOut: () => {
        this.handleMouseOut()
      },
      onMouseDown: (e) => {
        clearTimeout(this.animateTimeout)

        this.touchObject = {
          startX: e.clientX,
          startY: e.clientY
        }

        this.setState({
          dragging: true
        })
      },
      onMouseMove: (e) => {
        if (!this.state.dragging) {
          return
        }

        var direction = this.swipeDirection(
          this.touchObject.startX,
          e.clientX,
          this.touchObject.startY,
          e.clientY
        )

        if (direction !== 0) {
          e.preventDefault()
        }

        var length = this.props.vertical ? Math.round(Math.sqrt(Math.pow(e.clientY - this.touchObject.startY, 2)))
                                         : Math.round(Math.sqrt(Math.pow(e.clientX - this.touchObject.startX, 2)))

        this.touchObject = {
          startX: this.touchObject.startX,
          startY: this.touchObject.startY,
          endX: e.clientX,
          endY: e.clientY,
          length: length,
          direction: direction
        }

        this.setState({
          left: this.props.vertical ? 0 : this.getTargetLeft(this.touchObject.length * this.touchObject.direction),
          top: this.props.vertical ? this.getTargetLeft(this.touchObject.length * this.touchObject.direction) : 0,
          animate: false
        })
      },
      onMouseUp: (e) => {
        if (!this.state.dragging) {
          return
        }

        this.handleSwipe(e)
      },
      onMouseLeave: (e) => {
        if (!this.state.dragging) {
          return
        }

        this.handleSwipe(e)
      }
    }
  }

  handleMouseOver () {
    if (this.props.autoplay) {
      this.autoplayPaused = true
      this.stopAutoplay()
    }
  }

  handleMouseOut () {
    if (this.props.autoplay && this.autoplayPaused) {
      this.startAutoplay()
      this.autoplayPaused = null
    }
  }

  handleClick (e) {
    if (this.clickSafe === true) {
      e.preventDefault()
      e.stopPropagation()

      if (e.nativeEvent) {
        e.nativeEvent.stopPropagation()
      }
    }
  }

  handleSwipe (e) {
    if (typeof this.touchObject.length !== 'undefined' && this.touchObject.length > 44) {
      this.clickSafe = true
    } else {
      this.clickSafe = false
    }

    let slidesToShow = this.props.slidesToShow

    const snap = (this.state.slideWidth + this.props.cellSpacing)

    if (this.props.slidesToScroll === 'auto') {
      slidesToShow = this.state.slidesToScroll
    }

    if (this.touchObject.length > (this.state.slideWidth / slidesToShow) / 5) {
      if (this.touchObject.direction === 1) {
        if (
          this.state.currentSlide >= React.Children.count(this.props.children) - slidesToShow &&
          !this.props.wrapAround
        ) {
          this.animateSlide()
        } else {
          // this.nextSlide()

          // find the target slide to go to based on the length of the swipe / drag
          const target = Math.min(Math.round((this.state.slideWidth + this.touchObject.length) / snap) + this.state.currentSlide, React.Children.count(this.props.children) - slidesToShow)

          this.goToSlide(target)
        }
      } else if (this.touchObject.direction === -1) {
        if (this.state.currentSlide <= 0 && !this.props.wrapAround) {
          this.animateSlide()
        } else {
          // this.prevSlide()

          // find the target slide to go to based on the length of the swipe / drag
          const target = Math.max(-Math.round((this.state.slideWidth + this.touchObject.length) / snap) + this.state.currentSlide, 0)
          this.goToSlide(target)
        }
      }
    } else {
      this.goToSlide(this.state.currentSlide)
    }

    this.touchObject = {}

    this.setState({
      dragging: false
    })
  }

  swipeDirection (x1, x2, y1, y2) {
    let xDist
    let yDist
    let r
    let swipeAngle

    xDist = x1 - x2
    yDist = y1 - y2
    r = Math.atan2(yDist, xDist)

    swipeAngle = Math.round(r * 180 / Math.PI)
    if (swipeAngle < 0) {
      swipeAngle = 360 - Math.abs(swipeAngle)
    }
    if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
      return 1
    }
    if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
      return 1
    }
    if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
      return -1
    }
    if (this.props.vertical === true) {
      if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
        return 1
      } else {
        return -1
      }
    }
    return 0
  }

  autoplayIterator () {
    if (this.props.wrapAround) {
      return this.nextSlide()
    }
    if (this.state.currentSlide !== this.state.slideCount - this.state.slidesToShow) {
      this.nextSlide()
    } else {
      this.stopAutoplay()
    }
  }

  startAutoplay () {
    this.autoplayID = setInterval(this.autoplayIterator, this.props.autoplayInterval)
  }

  resetAutoplay () {
    if (this.props.autoplay && !this.autoplayPaused) {
      this.stopAutoplay()
      this.startAutoplay()
    }
  }

  stopAutoplay () {
    this.autoplayID && clearInterval(this.autoplayID)
  }

  goToSlide (index, hasCb = true) {
    var self = this
    if ((index >= React.Children.count(this.props.children) || index < 0)) {
      if (!this.props.wrapAround) { return }
      if (index >= React.Children.count(this.props.children)) {
        if (hasCb) {
          this.props.beforeSlide(this.state.currentSlide, 0)
        }
        return this.setState({
          currentSlide: 0
        }, function () {
          self.animateSlide(self.getTargetLeft(null, index), function () {
            self.animateSlide(null, 0.01)
            if (hasCb) {
              self.props.afterSlide(0)
            }
            self.resetAutoplay()
            self.setExternalData()
          })
        })
      } else {
        var endSlide = React.Children.count(this.props.children) - this.state.slidesToScroll
        if (hasCb) {
          this.props.beforeSlide(this.state.currentSlide, endSlide)
        }
        return this.setState({
          currentSlide: endSlide
        }, function () {
          self.animateSlide(self.getTargetLeft(null, index), function () {
            self.animateSlide(null, 0.01)
            if (hasCb) {
              self.props.afterSlide(endSlide)
            }
            self.resetAutoplay()
            self.setExternalData()
          })
        })
      }
    }

    if (hasCb) {
      this.props.beforeSlide(this.state.currentSlide, index)
    }

    this.setState({
      currentSlide: index
    }, function () {
      self.animateSlide()
      if (hasCb) {
        this.props.afterSlide(index)
      }
      self.resetAutoplay()
      self.setExternalData()
    })
  }

  nextSlide () {
    var childrenCount = React.Children.count(this.props.children)
    var slidesToShow = this.props.slidesToShow
    if (this.props.slidesToScroll === 'auto') {
      slidesToShow = this.state.slidesToScroll
    }
    if (this.state.currentSlide >= childrenCount - slidesToShow && !this.props.wrapAround) {
      return
    }

    if (this.props.wrapAround) {
      this.goToSlide(this.state.currentSlide + this.state.slidesToScroll)
    } else {
      if (this.props.slideWidth !== 1) {
        return this.goToSlide(this.state.currentSlide + this.state.slidesToScroll)
      }
      this.goToSlide(
        Math.min(this.state.currentSlide + this.state.slidesToScroll, childrenCount - slidesToShow)
      )
    }
  }

  prevSlide () {
    if (this.state.currentSlide <= 0 && !this.props.wrapAround) {
      return
    }

    if (this.props.wrapAround) {
      this.goToSlide(this.state.currentSlide - this.state.slidesToScroll)
    } else {
      this.goToSlide(Math.max(0, this.state.currentSlide - this.state.slidesToScroll))
    }
  }

  animateSlide (endValue, callback) {
    this.setState({
      [this.props.vertical ? 'top' : 'left']: endValue || this.getTargetLeft(),
      animate: true
    })

    this.animateTimeout = setTimeout(() => {
      if (callback) {
        callback()
      }
    }, 1000)
  }

  getTargetLeft (touchOffset, slide) {
    var offset
    var target = slide || this.state.currentSlide

    switch (this.props.cellAlign) {
      case 'left': {
        offset = 0
        offset -= this.props.cellSpacing * (target)
        break
      }
      case 'center': {
        offset = (this.state.frameWidth - this.state.slideWidth) / 2
        offset -= this.props.cellSpacing * (target)
        break
      }
      case 'right': {
        offset = this.state.frameWidth - this.state.slideWidth
        offset -= this.props.cellSpacing * (target)
        break
      }
    }

    var left = this.state.slideWidth * target

    var lastSlide = this.state.currentSlide > 0 && target + this.state.slidesToScroll >= this.state.slideCount

    if (lastSlide && this.props.slideWidth !== 1 && !this.props.wrapAround && this.props.slidesToScroll === 'auto') {
      left = (this.state.slideWidth * this.state.slideCount) - this.state.frameWidth
      offset = 0
      offset -= this.props.cellSpacing * (this.state.slideCount - 1)
    }

    offset -= touchOffset || 0

    return (left - offset) * -1
  }

  bindEvents () {
    window.addEventListener('resize', this.onResize, false)
    document.addEventListener('readystatechange', this.onReadyStateChange, false)
  }

  onResize () {
    this.setState({
      animate: false
    })

    this.setDimensions()
  }

  onReadyStateChange () {
    this.setState({
      animate: false
    })

    this.setDimensions()
  }

  unbindEvents () {
    window.removeEventListener('resize', this.onResize, false)
    document.removeEventListener('readystatechange', this.onReadyStateChange, false)
  }

  formatChildren (children) {
    const {
      vertical,
      onSlideClick
    } = this.props

    const {
      top,
      left,
      currentSlide
    } = this.state

    const positionValue = vertical ? top : left

    return React.Children.map(children, (child, index) => {
      const className = classNames('nica-carousel__slide', {
        'nica-carousel__slide--active': index === currentSlide
      })
      return (
        <li
          onClick={ () => { if (!this.clickSafe) { onSlideClick(index) } }}
          className={className}
          style={this.getSlideStyles(index, positionValue)}
          key={index}>
          {child}
        </li>
      )
    })
  }

  setInitialDimensions () {
    const {
      vertical,
      initialSlideHeight,
      initialSlideWidth,
      slidesToShow,
      cellSpacing,
      children
    } = this.props

    let slideWidth
    let frameHeight
    let slideHeight

    slideWidth = vertical ? (initialSlideHeight || 0) : (initialSlideWidth || 0)
    slideHeight = initialSlideHeight ? (initialSlideHeight * slidesToShow) : 0

    frameHeight = slideHeight + (cellSpacing * (slidesToShow - 1))

    this.setState({
      slideHeight: slideHeight,
      frameWidth: vertical ? frameHeight : '100%',
      slideCount: React.Children.count(children),
      slideWidth: slideWidth
    }, () => {
      this.setLeft()
      this.setExternalData()
    })
  }

  setDimensions (props) {
    props = props || this.props

    let slideWidth
    let slidesToScroll
    let firstSlide
    let frame
    let frameWidth
    let frameHeight
    let slideHeight

    let bSlideWidth = props.slideWidth

    if (props.breakPoints) {
      for (let point in props.breakPoints) {
        if (parseInt(point) >= window.innerWidth) {
          bSlideWidth = props.breakPoints[point].slideWidth
        }
      }
    }

    slidesToScroll = props.slidesToScroll

    frame = this.refs.frame

    firstSlide = frame.childNodes[0].childNodes[0]

    if (firstSlide) {
      firstSlide.style.height = 'auto'
      slideHeight = this.props.vertical
      ? firstSlide.offsetHeight * props.slidesToShow
      : firstSlide.offsetHeight
    } else {
      slideHeight = 100
    }

    if (typeof bSlideWidth !== 'number') {
      slideWidth = parseInt(bSlideWidth)
    } else {
      if (props.vertical) {
        slideWidth = (slideHeight / props.slidesToShow) * bSlideWidth
      } else {
        slideWidth = (frame.offsetWidth / props.slidesToShow) * bSlideWidth
      }
    }

    if (!props.vertical) {
      slideWidth -= props.cellSpacing * ((100 - (100 / props.slidesToShow)) / 100)
    }

    frameHeight = slideHeight + (props.cellSpacing * (props.slidesToShow - 1))
    frameWidth = props.vertical ? frameHeight : frame.offsetWidth

    if (props.slidesToScroll === 'auto') {
      slidesToScroll = Math.floor(frameWidth / (slideWidth + props.cellSpacing))
    }

    this.setState({
      slideHeight: slideHeight,
      frameWidth: frameWidth,
      slideWidth: slideWidth,
      slidesToScroll: slidesToScroll,
      left: props.vertical ? 0 : this.getTargetLeft(),
      top: props.vertical ? this.getTargetLeft() : 0
    }, () => {
      this.setLeft()
    })
  }

  setLeft () {
    this.setState({
      left: this.props.vertical ? 0 : this.getTargetLeft(),
      top: this.props.vertical ? this.getTargetLeft() : 0
    })
  }

  setExternalData () {
    if (this.props.data) {
      this.props.data()
    }
  }

  getSlideTargetPosition (index, positionValue) {
    var slidesToShow = (this.state.frameWidth / this.state.slideWidth)
    var targetPosition = (this.state.slideWidth + this.props.cellSpacing) * index
    var end = ((this.state.slideWidth + this.props.cellSpacing) * slidesToShow) * -1

    if (this.props.wrapAround) {
      var slidesBefore = Math.ceil(positionValue / (this.state.slideWidth))
      if (this.state.slideCount - slidesBefore <= index) {
        return (this.state.slideWidth + this.props.cellSpacing) *
          (this.state.slideCount - index) * -1
      }

      var slidesAfter = Math.ceil((Math.abs(positionValue) - Math.abs(end)) / this.state.slideWidth)

      if (this.state.slideWidth !== 1) {
        slidesAfter = Math.ceil((Math.abs(positionValue) - (this.state.slideWidth)) / this.state.slideWidth)
      }

      if (index <= slidesAfter - 1) {
        return (this.state.slideWidth + this.props.cellSpacing) * (this.state.slideCount + index)
      }
    }

    return targetPosition
  }

  render () {
    const {
      children,
      containerClassName,
      frameClassName
    } = this.props

    const {
      animate
    } = this.state

    // Format the children for the slides.
    const slideChildren = React.Children.count(children) > 1
          ? this.formatChildren(children)
          : children

    // Class names for the container
    const containerClassNames = classNames('nica-carousel', containerClassName)

    // Class names for the frame
    const frameClassNames = classNames('nica-carousel__frame', frameClassName)

    // Classnames for the list.
    const listClassNames = classNames('nica-carousel__list', {
      'nica-carousel__list--animate': animate
    })

    return (
      <div className={containerClassNames} style={this.getSliderStyles()} ref='slider'>
        <div
          ref='frame'
          className={frameClassNames}
          style={this.getFrameStyles()}
          {...this.getTouchEvents()}
          {...this.getMouseEvents()}
          onClick={this.handleClick}>
          <ul className={listClassNames} style={this.getListStyles()} ref='list'>
            {slideChildren}
          </ul>
        </div>
      </div>
    )
  }
}

/**
 *  propTypes
 *  @return {Object}
 */
Carousel.propTypes = {
  afterSlide: PropTypes.func,
  autoplay: PropTypes.bool,
  autoplayInterval: PropTypes.number,
  beforeSlide: PropTypes.func,
  cellAlign: PropTypes.oneOf(['left', 'center', 'right']),
  cellSpacing: PropTypes.number,
  data: PropTypes.func,
  dragging: PropTypes.bool,
  easing: PropTypes.string,
  edgeEasing: PropTypes.string,
  framePadding: PropTypes.string,
  frameOverflow: PropTypes.string,
  initialSlideHeight: PropTypes.number,
  initialSlideWidth: PropTypes.number,
  slideIndex: PropTypes.number,
  slidesToShow: PropTypes.number,
  slidesToScroll: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(['auto'])
  ]),
  slideWidth: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  speed: PropTypes.number,
  swiping: PropTypes.bool,
  vertical: PropTypes.bool,
  width: PropTypes.string,
  wrapAround: PropTypes.bool,
  containerClassName: PropTypes.string,
  frameClassName: PropTypes.string,
  onSlideClick: PropTypes.func
}

/**
 *  defaultProps
 *  @type {Object}
 */
Carousel.defaultProps = {
  afterSlide: noop,
  autoplay: false,
  autoplayInterval: 3000,
  beforeSlide: noop,
  cellAlign: 'left',
  cellSpacing: 0,
  data: noop,
  dragging: true,
  easing: 'easeOutCirc',
  edgeEasing: 'easeOutElastic',
  framePadding: '0px',
  frameOverflow: 'hidden',
  slideIndex: 0,
  slidesToScroll: 1,
  slidesToShow: 1,
  slideWidth: 1,
  speed: 500,
  swiping: true,
  vertical: false,
  width: '100%',
  wrapAround: false,
  onSlideClick: () => {},
  breakPoints: null
}

/**
 *  @module Carousel
 */
export default Carousel
