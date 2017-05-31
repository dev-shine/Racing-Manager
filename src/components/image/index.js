/**
 * @module react
 */
import React, { Component } from 'react'

/**
 * @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 *  @module BackgroundImage
 */
import BackgroundImage from './BackgroundImage'

/**
 *  @module Image
 */
import Image from './Image'

/**
 *  @module getImage
 */
import { getImage, isInViewport } from 'utils/imageutils'

/**
 *  LazyImage
 *  @description [Will take a image src and wait for it to loader and show a placeholder]
 *  @example <BackgroundImage src={source} placeholder={localImage} {...other attributes}>
 *             {...child components}
 *           </BackgroundImage>
 * @todo - Have a fade animation for when the image has loaded in.
 */
class LazyImage extends Component {
  /**
   *  @constructor
   *  @param  {Any} props
   */
  constructor (props) {
    super(props)

    // Set the initial state
    this.state = {
      loaded: false,
      error: false,
      isLoading: false
    }

    // Cache the timeout
    this.timeoutCache = null

    // Bind custom functions
    this.handleImgLoad = this.handleImgLoad.bind(this)
    this.handleImgError = this.handleImgError.bind(this)
    this.checkViewport = this.checkViewport.bind(this)
    this.bindScrollEvent = this.bindScrollEvent.bind(this)
    this.unBindScrollEvent = this.unBindScrollEvent.bind(this)
    this.fetchImage = this.fetchImage.bind(this)
    this.setRef = this.setRef.bind(this)
  }

  /**
   *  handleImgLoad
   *  @description Flags that the image has loaded.
   *  @return {Void}
   */
  handleImgLoad () {
    this.setState({
      loaded: true,
      isLoading: false
    })
  }

  /**
   *  handleImgError
   *  @description Flags that the image has not loaded and an error has occured.
   *  @return {Void}
   */
  handleImgError () {
    this.setState({
      loaded: false,
      error: true,
      isLoading: false
    })
  }

  componentDidMount () {
    // Check the viewport and see if the image is in view. Let the browser breath and do this on the next tick
    this.timeoutCache = setTimeout(() => {
      this.checkViewport()
      this.timeoutCache = null
    }, 0)

    // Bind scroll event
    this.bindScrollEvent()
  }

  componentWillUnmount () {
    // Unbind scroll event
    this.unBindScrollEvent()

    // Remove the timeout if it exists
    if (this.timeoutCache) {
      clearTimeout(this.timeoutCache)
    }
  }

  /**
   *  @name bindScrollEvent
   */
  bindScrollEvent () {
    window.addEventListener('scroll', this.checkViewport, false)
  }

  /**
   *  @name unBindScrollEvent
   */
  unBindScrollEvent () {
    if (!this.state.loaded) {
      window.removeEventListener('scroll', this.checkViewport, false)
    }
  }

  /**
   *  fetchImage
   *  @return {Void}
   */
  fetchImage () {
    /**
     *  @const
     */
    const {
      imageSrc
    } = this.props

    // Get the image from the src passed in from props
    getImage(imageSrc)
    .then(this.handleImgLoad)
    .catch(this.handleImgError)
  }

  shouldComponentUpdate (nextState, nextProps) {
    return !this.state.loaded
  }

  /**
   *  @name checkViewport
   */
  checkViewport () {
    if (!this.state.isLoading && !this.state.loaded) {
      if (isInViewport(this.imageRef)) {
        // if is in viewport and is not requesting start fetching
        this.fetchImage()
      }
    }

    return null
  }

  /**
   *  setRef
   *  @param {Elem} ref
   */
  setRef (ref) {
    this.imageRef = ref
  }

  render () {
    /**
     *  @const
     */
    const {
      imageSrc,
      placeholder,
      isImage,
      className,
      alt,
      children
    } = this.props

    /**
     *  @const
     */
    const {
      loaded,
      error
    } = this.state

    /**
     *  @type {String}
     */
    const source = !loaded || error ? placeholder : imageSrc

    return (
      !isImage
      ? <BackgroundImage
          source={source}
          isLoaded={loaded}
          className={className}
          setRef={this.setRef}>
          {children}
        </BackgroundImage>
      : <Image
          setRef={this.setRef}
          source={source}
          isLoaded={loaded}
          className={className}
          alt={alt}>
            {children}
        </Image>
    )
  }
}

/**
 *  defaultProps
 *  @type {Object}
 */
LazyImage.defaultProps = {
  placeholder: '',
  isImage: false,
  alt: '',
  imageSrc: ''
}

/**
 *  propTypes
 *  @type {Object}
 */
LazyImage.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  isImage: PropTypes.bool,
  alt: PropTypes.string
}

export default LazyImage
