/**
 * @module react
 */
import React from 'react'

/**
 * @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 * SampleButton component
 * @param { Object } props
 * @property { String } props.text
 * @returns { XML }
 */
const SampleButton = props => {
  const { text } = props

  return (
    <button className='sample-button'>
      {text}
    </button>
  )
}

/**
 * Component props types
 * @type { Object }
 */
SampleButton.propTypes = {
  text: PropTypes.string
}

/**
 * Default component props
 * @type { Object }
 */
SampleButton.defaultProps = {
  text: ''
}

export default SampleButton
