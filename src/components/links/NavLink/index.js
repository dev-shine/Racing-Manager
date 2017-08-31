import React, { Component } from 'react'

import classNames from 'utils/classnames'

import { NavLink as DefaultNavLink } from 'react-router-dom'

const BASE_PATH = '/'

class NavLink extends Component {
  handleIsActive (match, location) {
    if (
      match &&
      match.path === BASE_PATH &&
      location.pathname !== BASE_PATH
    ) return false

    return !!match
  }

  render () {
    const {
      activeClassName,
      className,
      modifier,
      children,
      href,
      ...rest
    } = this.props

    const modifiedClassNames = classNames('link', className, modifier)

    return (
      <DefaultNavLink
        {...rest}
        to={href}
        className={modifiedClassNames}
        isActive={this.handleIsActive}
        activeClassName={activeClassName}
      >
        {children}
      </DefaultNavLink>
    )
  }
}

export default NavLink
