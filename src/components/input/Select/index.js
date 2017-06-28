/**
 *  @module React
 */
import React from 'react'

/**
 *  @module PropTypes
 */
import PropTypes from 'prop-types'

/**
*  @module InputLine
*/
import InputLine from 'components/input/InputLine'

/**
 *  @module classNames
 */
import classNames from 'utils/classnames'

/**
 *  @name Select
 */
const Select = props => {
  const {
    className,
    modifier,
    children,
    placeholder,
    name,
    value,
    error,
    onChange,
    defaultValue
  } = props

  const modifiedClassNames = classNames('select', className, modifier)

  /**
   *  hasError
   *  @const
   *  @type {Boolean}
   */
  const hasError = error && !!error.length

  return (
    <div className={modifiedClassNames}>
      <select
        className='select__select-input'
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={onChange}
        value={value}>
        {children}
      </select>
      <InputLine error={hasError} />
    </div>
  )
}

Select.defaultProps = {
  placeholder: '',
  modifier: '',
  defaultValue: '',
  value: '',
  className: '',
}

Select.propTypes = {
  value: PropTypes.string,
  error: PropTypes.array,
  placeholder: PropTypes.string,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  name: PropTypes.string,
  defaultValue: PropTypes.string,
  handleChange: PropTypes.func
}

/**
 *  @module Select
 */
export default Select
