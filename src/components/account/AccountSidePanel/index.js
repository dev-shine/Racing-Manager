import React from 'react'

import { Panel, NavLink } from 'components/navigation/SidePanel'

import classNames from 'utils/classnames'

const AccountSidePanel = (props) => {
  const {
    className
  } = props

  const modifiedClassNames = classNames('account-side-panel', className)

  return (
    <Panel className={modifiedClassNames}>
      <NavLink href={'/account'}>
        Personal Information
      </NavLink>

      <NavLink href={'/account/contact'}>
        Contact Details
      </NavLink>

      <NavLink href={'/account/notifications'}>
        Notifications
      </NavLink>

      <NavLink href={'/account/payment'}>
        Payment Information
      </NavLink>

      <NavLink href={'/account/security'}>
        Security Settings
      </NavLink>
    </Panel>
  )
}

export default AccountSidePanel
