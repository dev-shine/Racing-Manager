import React from 'react'
import { Link } from 'react-router-dom'

const HorseBrief = props => {
  const { data } = props
  const { name, age, color, gender, owner = {} } = data

  return (
    <div className='horse-brief'>
      <h1 className='horse-header__main-title'>
        {name}
      </h1>
      <div className='horse-header__brief-info'>
        {age}yo <span className='horse-header__info'>{color} {gender}</span> Owned by: <Link to='' className='horse-header__details-link'>{owner.name}</Link>
      </div>
    </div>
  )
}

export default HorseBrief
