/**
 *  @module React
 */
import React from 'react'

/**
 *  @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 *  @module heroBg
 */
import { heroBg } from 'assets/images'

/**
 *  @module Hero
 */
import Hero from 'components/parallax/Hero'

/**
 *  ViewHeader
 *  @return {React.Component}
 */
const ViewHeader = ({title}) => {
  return (
    <div className='view-header'>
      <Hero
        className='view-header__bg'
        featuredImage={heroBg} />
      <div className='view-header__title'>
        <div className='container'>
          <h1 className='uppercase'>{title}</h1>
        </div>
      </div>
    </div>
  )
}

/**
 *  PropTypes
 *  @type {Object}
 */
ViewHeader.PropTypes = {
  title: PropTypes.string
}

/**
 *  defaultProps
 *  @type {Object}
 */
ViewHeader.defaultProps = {
  title: 'Join the action'
}

/**
 *  @module ViewHeader
 */
export default ViewHeader
