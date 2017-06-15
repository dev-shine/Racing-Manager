import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

const HorseBenefitsInfo = props => {
  const { data } = props

  return (
    <div className='horse-benefits'>
      <div className='horse-header__small-title'>
        Benefits
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

HorseBenefitsInfo.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired
}

HorseBenefitsInfo.defaultProps = {
  data: []
}
export default HorseBenefitsInfo
