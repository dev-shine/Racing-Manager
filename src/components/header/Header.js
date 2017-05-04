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
  const { content, logohref } = props
  return (
    <header className='header'>
      <div className='header__container container'>
        <a href={logohref} className='header__logo'>
          <span className='header__logo-image image-background' />
          <h5 className='header__logo-text'>
            <span className='visible-sm-up'>The Racing Manager</span>
            <span className='hidden-sm-up'>TRM</span>
          </h5>
        </a>
        {content}
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
