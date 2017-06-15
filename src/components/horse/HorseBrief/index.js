import React from 'react'
// import PropTypes from 'prop-types'
import classNames from 'utils/classnames'

import { Link } from 'react-router-dom'

const HorseBrief = props => {
  const {
    className,
    modifier,
    data = {}
  } = props

  const { name, age, color, gender, owner = {} } = data

  const modifiedClassNames = classNames('horse-brief', className, modifier)

  return (
    <div className={modifiedClassNames}>
      <h1 className='horse-header__main-title'>
        {name}
      </h1>
      <div className='horse-header__brief-info'>
        {age}yo <span className='horse-header__info'>{color} {gender}</span> Owned by: <Link to='' className='horse-header__details-link'>{owner.name}</Link>
      </div>
    </div>
  )
}

HorseBrief.propTypes = {
}

HorseBrief.defaultProps = {
}

export default HorseBrief
