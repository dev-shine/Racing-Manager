import React from 'react'

import PropTypes from 'prop-types'

import classNames from 'utils/classnames'

const Radio = props => {
  const {
    name,
    value,
    checked,
    onChange,
    className,
    modifier,
    label,
    id
  } = props

  const modifiedClassNames = classNames('radio', className, modifier)

  return (
    <label className={modifiedClassNames} htmlFor={id}>
      <input
        className='radio__input'
        type='radio'
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={(e) => { console.log('hi!'); onChange(e) }}
        />
      <span className='radio__button'></span>
      <h5 className='radio__label'>{label}</h5>
    </label>
  )
}

Radio.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool
}

Radio.defaultProps = {
  checked: false
}

export default Radio
