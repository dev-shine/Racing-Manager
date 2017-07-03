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
 *  TitleHero
 *  @return {React.Component}
 */
const TitleHero = ({title}) => {
  return (
    <div className='title-hero'>
      <Hero
        className='title-hero__bg'
        featuredImage={heroBg} />
      <div className='title-hero__title'>
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
TitleHero.PropTypes = {
  title: PropTypes.string
}

/**
 *  defaultProps
 *  @type {Object}
 */
TitleHero.defaultProps = {
  title: 'Join the action'
}

/**
 *  @module TitleHero
 */
export default TitleHero
