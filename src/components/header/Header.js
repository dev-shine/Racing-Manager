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
  const { children, location } = props
  return (
    <header className='header'>
      <div className='container'>
        <a href='/' className='header__logo'>
          <span className='header__logo-image svg-background' />
          <h5 className='header__logo-text'>The Racing Manager</h5>
        </a>
        <div className='header__content'>
          {children}
        </div>
      </div>
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
