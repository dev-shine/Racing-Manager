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
import { getImage } from 'utils/imageutils'

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
      error: false
    }

    // Bind custom functions
    this.handleImgLoad = this.handleImgLoad.bind(this)
    this.handleImgError = this.handleImgError.bind(this)
  }

  /**
   *  handleImgLoad
   *  @description Flags that the image has loaded.
   *  @return {Void}
   */
  handleImgLoad () {
    this.setState({
      loaded: true
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
      error: true
    })
  }

  componentDidMount () {
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
          className={className}>
          {children}
        </BackgroundImage>
      : <Image
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
