
import React from 'react'

import PropTypes from 'prop-types'

import TextButton from 'components/buttons/TextButton'

import Icon from 'components/icon'

const TextIconButton = props => {
  const {
    title,
    iconModifier,
    modifier,
    textClassName,
    ...rest
  } = props

  return (
    <TextButton
      {...rest}
      modifier={modifier}
      textClassName={textClassName}
      text={(
        <span
          className='inherit'
        >
          {title}
          <Icon
          className='align-middle text-icon-button__icon nano'
          modifier={iconModifier} />
        </span>
      )} />
  )
}
/**
 * Default component props
 * @type { Object }
 */
TextIconButton.defaultProps = {
  modifier: 'xs',
  textClassName: 'lowercase',
}

/**
 * Component props types
 * @type { Object }
 */
TextIconButton.propTypes = {
  title: PropTypes.string,
  iconModifier: PropTypes.string,
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  textClassName: PropTypes.string,
}

export default TextIconButton
