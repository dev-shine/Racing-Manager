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
 *  @module Icon
 */
import Icon from 'components/icon'

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
    defaultValue,
    title
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
      <div className='select__left visible-sm-up'>
        <h6 className='secondary-font uppercase'>
          {title}
        </h6>
      </div>
      <div className='select__middle'>
        <select
          className='select__select-input'
          name={name}
          defaultValue={defaultValue}
          placeholder={placeholder}
          onChange={onChange}
          value={value}>
          {children}
        </select>
        <InputLine error={hasError} className='visible-sm-up' />
      </div>
      <div className='select__right visible-sm-up'>
        <Icon
          className='select__dropdown-icon'
          modifier='dropdown' />
      </div>
    </div>
  )
}

Select.defaultProps = {
  placeholder: '',
  modifier: '',
  defaultValue: '',
  value: '',
  className: '',
  title: ''
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
  handleChange: PropTypes.func,
  title: PropTypes.string
}

/**
 *  @module Select
 */
export default Select
