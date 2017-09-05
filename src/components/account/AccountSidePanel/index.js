import React from 'react'

import { Panel, NavLink } from 'components/navigation/SidePanel'

import classNames from 'utils/classnames'

import { withRouter } from 'react-router-dom'

const AccountSidePanel = (props) => {
  const {
    className,
    location,
    onClick
  } = props

  const modifiedClassNames = classNames('account-side-panel', className)

  return (
    <Panel className={modifiedClassNames}>
      <NavLink href={'/account'} exact location={location} onClick={onClick}>
        Personal Information
      </NavLink>

      <NavLink href={'/account/contact'} exact location={location} onClick={onClick}>
        Contact Details
      </NavLink>

      <NavLink href={'/account/notifications'} exact location={location} onClick={onClick}>
        Notifications
      </NavLink>

      <NavLink href={'/account/payment'} exact location={location} onClick={onClick}>
        Payment Information
      </NavLink>

      <NavLink href={'/account/security'} exact location={location} onClick={onClick}>
        Security Settings
      </NavLink>
    </Panel>
  )
}

export default withRouter(AccountSidePanel)
