/**
 * @module react
 */
import React from 'react'

/**
 * @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 *  @module Image
 */
import Image from 'components/image'

/**
 *  @module footerLogo
 */
import { footerLogo } from 'assets/images'

/**
 * Footer component
 * @param { Object } props
 * @returns { React.Component }
 * @constructor
 */
const Footer = props => {
  return (
    <footer className='footer'>
      <div className='row'>
        <div className='col-xs-12 col-sm-4 footer__left'>
          <Image
            className='footer__logo'
            imageSrc={footerLogo} />
        </div>
        <div className='col-xs-12 col-sm-8 footer__right'></div>
      </div>
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
