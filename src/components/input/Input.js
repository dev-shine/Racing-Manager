/**
*  @module react
*/
import React from 'react'

/**
 * @module PropTypes
 */
import PropTypes from 'prop-types'

/**
*  @module classNames
*/
import classNames from 'classnames'

/**
 *  @class
 *  @extends {Component}
 */
const Input = props => {
  /**
   *  @const
   */
  const {
    type,
    placeholder,
    name,
    value,
    error,
    handleSubmit,
    handleBlur,
    handleFocus,
    handleChange
  } = props

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
  const className = classNames('form-input')

  return (
    <div className={className}>
      <div className='form-input__content'>
        <input
          className='form-input__input-element'
          type={type}
          name={name}
          value={value}
          onSubmit={handleSubmit}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onChange={handleChange} />
        <span className='form-input__placeholder'>
          {placeholder}
        </span>
      </div>
      {hasError &&
        <div className='form-input__description'>
          {error.map((error, i) => <div key={i}>{error}</div>)}
        </div>
      }
    </div>
  )
}

/**
 *  defaultProps
 *  @type {Object}
 */
Input.defaultProps = {
  type: 'text'
}

/**
 *  propTypes
 *  @type {Object}
 */
Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  validate: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string,
  error: PropTypes.array,
  handleSubmit: PropTypes.func,
  handleBlur: PropTypes.func,
  handleFocus: PropTypes.func,
  handleChange: PropTypes.func
}

/**
 *  @module Input
 */
export default Input
