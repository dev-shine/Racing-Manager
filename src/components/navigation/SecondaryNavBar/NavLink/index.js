import React, { PureComponent } from 'react'

import classNames from 'utils/classnames'

import CtaLink from 'components/links/CtaLink'

import { withRouter } from 'react-router-dom'

import PropTypes from 'prop-types'

import omit from 'utils/objectutils/omit'

class NavLink extends PureComponent {
  constructor (props) {
    super(props)

    // Bind custom Fns
    this.isActive = this.isActive.bind(this)
  }

  isActive () {
    const {
      location,
      href
    } = this.props

    return (location.pathname && location.pathname === href)
  }

  render () {
    const {
      className,
      children,
      linkClassName,
      ...rest
    } = this.props

    const isLinkActive = this.isActive()

    const modifiedClassNames = classNames('secondary-nav-link', className, {
      active: isLinkActive
    })

    const modifiedLinkClassNames = classNames('secondary-nav-link__link', linkClassName)

    const validLinkProps = omit({...rest}, ['match', 'location', 'staticContext', 'history'])

    return (
      <li className={modifiedClassNames}>
        <CtaLink className={modifiedLinkClassNames} {...validLinkProps}>
          <h6 className='secondary-nav-link__link-text uppercase'>
            {children}
          </h6>
        </CtaLink>
      </li>
    )
  }
}

NavLink.propTypes = {
  className: PropTypes.string,
  linkClassName: PropTypes.string
}

export default withRouter(NavLink)
