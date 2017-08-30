import React from 'react'

import SecondaryNavBar, { NavLink } from 'components/navigation/SecondaryNavBar'

const HorseNavBar = (props) => {
  const {
    name,
    modifier,
    className
  } = props

  return (
    <SecondaryNavBar modifier={modifier} className={className}>
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
