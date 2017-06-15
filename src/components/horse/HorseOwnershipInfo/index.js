import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

const HorseOwnershipInfo = props => {
  const { data } = props

  return (
    <div className='horse-ownership'>
      <div className='horse-header__small-title'>
        Ownership
      </div>
      <ul className='disc-list'>
        {
          data.map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))
        }
      </ul>
      <Link to='/' className='link--italic horse-header__read-more'>
        Read more...
      </Link>
    </div>
  )
}

HorseOwnershipInfo.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.string
  )
}

HorseOwnershipInfo.defaultProps = {
  data: []
}

export default HorseOwnershipInfo
