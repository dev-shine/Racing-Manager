import React from 'react'

import PropTypes from 'prop-types'

import classNames from 'utils/classnames'

import { Link } from 'react-router-dom'

const CtaLink = props => {
  const {
    className,
    modifier,
    href,
    children,
    nativeLink,
    ...rest
  } = props

  const modifiedClassNames = classNames('link', className, modifier)

  if (nativeLink) {
    return (
      <a href={href} className={modifiedClassNames} {...rest}>
        {children}
      </a>
    )
  } else {
    return (
      <Link to={href} className={modifiedClassNames} {...rest}>
        {children}
      </Link>
    )
  }
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
  href: PropTypes.string,
  nativeLink: PropTypes.bool
}

CtaLink.defaultProps = {
  className: '',
  modifier: '',
  href: '/',
  nativeLink: false
}

export default CtaLink
