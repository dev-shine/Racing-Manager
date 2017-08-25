import React from 'react'

import SecondaryNavBar, { NavLink } from 'components/navigation/SecondaryNavBar'

const HorseNavBar = (props) => {
  const {
    name
  } = props

  return (
    <SecondaryNavBar>
      <NavLink href={`/horse/${name}`}>
        updates
      </NavLink>
      <NavLink href={`/horse/${name}/statistics`}>
        statistics
      </NavLink>
      <NavLink href={`/horse/${name}/information`}>
        information
      </NavLink>
    </SecondaryNavBar>
  )
}

export default HorseNavBar
