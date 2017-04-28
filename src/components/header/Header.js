/**
 * @module react
 */
import React from 'react'

/**
 * @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 * Header component
 * @param { Object } props
 * @returns { XML }
 * @constructor
 */
const Header = props => {
  return (
    <header className='header'>
      This is a header.
    </header>
  )
}

/**
 * Component prop types
 * @type { Object }
 */
Header.propTypes = {
  test: PropTypes.string
}

/**
 * Component default props
 * @type { Object }
 */
Header.defaultProps = {}

export default Header
