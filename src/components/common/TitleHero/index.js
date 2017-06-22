/**
 *  @module React
 */
import React from 'react'

/**
 *  @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 *  @module Image
 */
import Image from 'components/image'

/**
 *  TitleHero
 *  @return {React.Component}
 */
const TitleHero = props => {
  return (
    <div className='title-hero'>
      <Image
        className='title-hero__bg'
        imageSrc={''}/>
    </div>
  )
}

/**
 *  PropTypes
 *  @type {Object}
 */
TitleHero.PropTypes = {

}

/**
 *  defaultProps
 *  @type {Object}
 */
TitleHero.defaultProps = {

}

/**
 *  @module TitleHero
 */
export default TitleHero
