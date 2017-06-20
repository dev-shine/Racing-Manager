import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import capitalize from 'utils/capitalize'

const HorseBrief = props => {
  const { data } = props
  const { name, age, color, gender, owner = {} } = data

  return (
    <div className='horse-brief'>
      <h1 className='horse-header__big-title'>
        {name}
      </h1>
      <div className='horse-header__horse-brief'>
        {age}yo <span className='horse-header__horse-gender'>{color} {gender}</span> Owned by: <Link to='' className='link--italic horse-brief__owner'>{capitalize(owner.name)}</Link>
      </div>
    </div>
  )
}

HorseBrief.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.string,
    color: PropTypes.string,
    gender: PropTypes.string,
    owner: PropTypes.shape({
      name: PropTypes.string
    }),
  }),
}

HorseBrief.defaultProps = {
  data: {
    name: 'TOBEFAIR',
    age: '7',
    color: 'Bay',
    gender: 'Gelding',
    owner: {
      name: 'Down the Quay Club'
    },
  },
}

export default HorseBrief
