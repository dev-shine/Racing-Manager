/**
 *  @module React
 */
import React from 'react'

/**
 *  @module TextButton
 */
import TextButton from 'components/buttons/TextButton'

import { Link } from 'react-router-dom'

const HeaderHome = (props) => {
  return (
    <div className='header__content'>
      <Link to='/register'>
        <TextButton
          className='header__register-button visible-sm-up'
          modifier='sm'
          text='Register for FREE' />
      </Link>
    </div>
  )
}

export default HeaderHome
