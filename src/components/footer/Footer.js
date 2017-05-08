/**
 * @module react
 */
import React from 'react'

/**
 * @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 * Footer component
 * @param { Object } props
 * @returns { React.Component }
 * @constructor
 */
const Footer = props => {
  return (
    <footer className='footer'>
      This is a footer.
    </footer>
  )
}

/**
 * Component prop types
 * @type { Object }
 */
Footer.propTypes = {
  test: PropTypes.string
}

/**
 * Component default props
 * @type { Object }
 */
Footer.defaultProps = {}

export default Footer
