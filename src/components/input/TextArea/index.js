/**
*  @module react
*/
import React, { Component } from 'react'

/**
 * @module PropTypes
 */
import PropTypes from 'prop-types'

/**
*  @module classNames
*/
import classNames from 'utils/classnames'

/**
 *  @module BaseAccordion
 */
import Accordion from 'components/accordion/BaseAccordion'

/**
 *  @module InputError
 */
import InputError from 'components/input/InputError'

/**
 *  @module debounce
 */
import debounce from 'utils/debounce'

/**
 *  @class
 *  @extends {Component}
 */
class TextArea extends Component {
  /**
   *  @constructor
   *  @param  {Object} props
   */
  constructor (props) {
    super(props)

    // Textarea ref
    this.textareaRef = null
    this.timeoutCache = null

    // Bind custom fns
    this.autoSize = this.autoSize.bind(this)

    this.debounceResize = debounce(this.autoSize)
  }

  componentDidMount () {
    if (this.props.autoGrow && this.textareaRef) {
      this.textareaRef.addEventListener('input', this.autoSize, false)
      window.addEventListener('resize', this.debounceResize, false)
      this.autoSize()
    }
  }

  componentWillUnmount () {
    if (this.textareaRef) {
      this.textareaRef.removeEventListener('input', this.autoSize, false)
      window.removeEventListener('resize', this.debounceResize, false)
    }

    if (this.timeoutCache) {
      clearTimeout(this.timeoutCache)
    }
  }

  /**
   *  focusField
   */
  focusField () {
    this.textareaRef.focus()
  }

  /**
   *  autoSize
   */
  autoSize () {
    if (!this.textareaRef) {
      return false
    }

    // Set the style
    this.textareaRef.style.height = `${this.props.minHeight}px`
    this.textareaRef.style.height = `${Math.max(this.textareaRef.scrollHeight, this.props.minHeight)}px`
  }

  render () {
    /**
     *  @const
     */
    const {
      type,
      placeholder,
      name,
      // value,
      error,
      className,
      modifier,
      handleSubmit,
      handleBlur,
      handleFocus,
      handleChange
    } = this.props

    /**
     *  hasError
     *  @const
     *  @type {Boolean}
     */
    const hasError = error && !!error.length

    /**
     *  className
     *  @const
     *  @type {String}
     */
    const modifiedClassNames = classNames('textarea', className, modifier)

    return (
      <div className={modifiedClassNames}>
        <textarea
          ref={ref => { this.textareaRef = ref }}
          className='textarea'
          type={type}
          name={name}
          // value={value}
          placeholder={placeholder}
          onSubmit={handleSubmit}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onChange={handleChange} />
        <Accordion
          className='input__accordion'
          isOpen={hasError}>
          <InputError
            className='micro'
            errors={error} />
        </Accordion>
      </div>
    )
  }
}

/**
 *  defaultProps
 *  @type {Object}
 */
TextArea.defaultProps = {
  type: 'text',
  minHeight: 40,
  autoGrow: true
}

/**
 *  propTypes
 *  @type {Object}
 */
TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  validate: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string,
  error: PropTypes.array,
  handleSubmit: PropTypes.func,
  handleBlur: PropTypes.func,
  handleFocus: PropTypes.func,
  handleChange: PropTypes.func,
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  minHeight: PropTypes.number,
  autoGrow: PropTypes.bool
}

/**
 *  @module TextArea
 */
export default TextArea
