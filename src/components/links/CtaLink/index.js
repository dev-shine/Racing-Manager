import React from 'react'

import PropTypes from 'prop-types'

import classNames from 'utils/classnames'

import { Link } from 'react-router-dom'

const CtaLink = props => {
  const {
    className,
    modifier,
    href,
    text
  } = props

  const modifiedClassNames = classNames('link', className, modifier)

  return (
     <Link to={href} className={modifiedClassNames}>
       {text}
     </Link>
  )
}

CtaLink.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  href: PropTypes.string
}

CtaLink.defaultProps = {
  className: '',
  modifier: '',
  href: '/'
}

export default CtaLink
