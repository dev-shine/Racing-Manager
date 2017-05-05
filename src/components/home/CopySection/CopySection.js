/**
 * @module react
 */
import React from 'react'

/**
 * @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 * @module classNames
 */
import classNames from 'classnames'

/**
 * @module CopyCard
 */
import CopyCard from 'components/home/CopyCard/CopyCard'

/**
 * @module Image
 */
import Image from 'components/Image/Image'

/**
 * CopySection component
 * @param { Object } props
 * @property { String } props.text
 * @returns { React.Component }
 */
const CopySection = props => {
  const { children, className, headline, featuredImage } = props

  const _className = classNames('copy-section', className)

  return (
    <div className={_className}>
      <div className="container relative">
        <Image
          className="copy-section__featured-image"
          imageSrc={featuredImage}
        />
      </div>
      <div className="copy-section__copy-card-container">
        <div className="copy-section__copy-card-background"></div>
        <CopyCard
          className="copy-section__copy-card-card"
          headline={headline}>
          {children}
        </CopyCard>
      </div>
      <h1 className="copy-section__overlapping-headline">{headline}</h1>
    </div>
  )
}

/**
 * Component props types
 * @type { Object }
 */
CopySection.propTypes = {
  className: PropTypes.string,
  headline: PropTypes.string.isRequired,
  featuredImage: PropTypes.string
}

/**
 * Default component props
 * @type { Object }
 */
CopySection.defaultProps = {
  className: ''
}

export default CopySection
