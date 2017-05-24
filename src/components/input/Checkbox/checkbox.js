/**
 * @module React
 */
import React from 'react'

/**
 * @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 * @module classNames
 */
import classNames from 'classnames'

/**
 * Checkbox component
 * @param { Object } props
 * @property { String } props.label
 * @property { String } props.name
 * @property { String | Array } [props.modifier = '']
 * @property { Boolean } [props.isChecked = false]
 * @property { Function } [props.handleChange]
 * @returns { React.Component }
 */
const Checkbox = props => {
  /**
   *  @const
   */
  const {
    label,
    name,
    className,
    value,
    handleChange
  } = props

  const _className = classNames('checkbox', className)

  return (
    <div className={_className}>
      <input
        type='checkbox'
        id={name}
        value={false}
        className='checkbox__input-element'
        onChange={handleChange}
        checked={value} />
      <label htmlFor={name} className='checkbox__label'>{label}</label>
    </div>
  )
}

/**
 * Component prop types
 * @type { Object }
 */
Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  value: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ]),
  error: PropTypes.array,
  handleChange: PropTypes.func
}

/**
 * Default component props
 * @type { Object }
 */
Checkbox.defaultProps = {
  modifier: '',
  value: false
}

export default Checkbox
