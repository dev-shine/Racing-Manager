import React from 'react'

import { Panel, NavLink } from 'components/navigation/SidePanel'

import classNames from 'utils/classnames'

import { withRouter } from 'react-router-dom'

const AccountSidePanel = (props) => {
  const {
    className,
    location
  } = props

  const modifiedClassNames = classNames('account-side-panel', className)

  return (
    <Panel className={modifiedClassNames}>
      <NavLink href={'/account'} exact location={location}>
        Personal Information
      </NavLink>

      <NavLink href={'/account/contact'} exact location={location}>
        Contact Details
      </NavLink>

      <NavLink href={'/account/notifications'} exact location={location}>
        Notifications
      </NavLink>

      <NavLink href={'/account/payment'} exact location={location}>
        Payment Information
      </NavLink>

      <NavLink href={'/account/security'} exact location={location}>
        Security Settings
      </NavLink>
    </Panel>
  )
}

export default withRouter(AccountSidePanel)
