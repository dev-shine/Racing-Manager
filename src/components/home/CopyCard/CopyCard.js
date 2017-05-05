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
 * CopyCard component
 * @param { Object } props
 * @property { String } props.text
 * @returns { React.Component }
 */
const CopyCard = props => {
  const { children, className, headline } = props

  const _className = classNames('copy-card', className)

  return (
    <div className={_className}>
      <h1 className="copy-card__headline">{headline}</h1>
      <hr className="copy-card__hr"/>
      {children}
    </div>
  )
}

/**
 * Component props types
 * @type { Object }
 */
CopyCard.propTypes = {
  className: PropTypes.string,
  headline: PropTypes.string.isRequired
}

/**
 * Default component props
 * @type { Object }
 */
CopyCard.defaultProps = {
  className: ''
}

export default CopyCard
