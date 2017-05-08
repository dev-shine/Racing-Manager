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
    modifier,
    value,
    handleChange
  } = props

  const className = classNames('checkbox', modifier, {
    'checkbox--square': modifier === 'square'
  })

  return (
    <div className={className}>
      <input
        type='checkbox'
        id={name}
        value='abc'
        className='checkbox__input'
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
