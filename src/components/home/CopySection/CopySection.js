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
 * CopySection component
 * @param { Object } props
 * @property { String } props.text
 * @returns { React.Component }
 */
const CopySection = props => {
  const { children, className, headline } = props

  const _className = classNames('copy-section full-height', className)

  return (
    <div className={_className}>
      <div className="copy-section__copy-card-container">
        <div className="copy-section__copy-card-background"></div>
        <CopyCard
          className="copy-section__copy-card-card"
          headline={headline}>
          {children}
        </CopyCard>
      </div>
    </div>
  )
}

/**
 * Component props types
 * @type { Object }
 */
CopySection.propTypes = {}

/**
 * Default component props
 * @type { Object }
 */
CopySection.defaultProps = {}

export default CopySection
