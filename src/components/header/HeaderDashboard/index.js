/**
 *  @module React
 */
import React from 'react'

import { Link } from 'react-router-dom'

import Icon from 'components/icon'

const HeaderHome = (props) => {
  return (
    <div className='header__content header-dashboard'>
      <div className='header__search'>
        <Link to='/browse-horses'>
          <Icon
            modifier='magnifying-glass' />
        </Link>
      </div>

      <Link to='/dashboard'>
        <h6 className='uppercase header-dashboard__link semi-bold'>
          my horses
        </h6>
      </Link>

      <h6 className='uppercase header-dashboard__link semi-bold'>
        account
      </h6>
    </div>
  )
}

export default HeaderHome
