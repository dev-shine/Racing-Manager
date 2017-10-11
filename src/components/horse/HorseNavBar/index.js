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
      <NavLink href={`/horse/${name}`} exact>
        racing news
      </NavLink>
      <NavLink href={`/horse/${name}/statistics`} exact>
        vital statistics
      </NavLink>
      <NavLink href={`/horse/${name}/information`} exact>
        key information
      </NavLink>
    </SecondaryNavBar>
  )
}

export default HorseNavBar
