/**
 *  @module React
 */
import React from 'react'
import PropTypes from 'prop-types'

/**
 * @module classNames
 */
import classNames from 'classnames'

/**
 * Partners component
 * @param { Object } props
 * @property { String } props.featuredImage
 * @property { String | Array } [props.modifier = '']
 * @returns { React.Component }
 */
const Partners = props => {
  const { className } = props

  const _className = classNames('partners', className)

  return (
    <div className={_className}>
    </div>
  )
}

/**
 * Component props types
 * @type { Object }
 */
Partners.propTypes = {
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ])
}

/**
 * Default component props
 * @type { Object }
 */
Partners.defaultProps = {
  modifier: ''
}

export default Partners
