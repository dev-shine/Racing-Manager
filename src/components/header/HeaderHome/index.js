/**
 *  @module React
 */
import React from 'react'

/**
 *  @module TextButton
 */
import TextButton from 'components/buttons/TextButton'

/**
 *  @module Link
 */
import { Link } from 'react-router-dom'

import LoginForm from 'components/forms/Login'

const HeaderHome = (props) => {
  return (
    <div className='header__content'>
      <Link to='/register'>
        <TextButton
          className='header__register-button visible-sm-up'
          modifier='sm'
          text='Register for FREE' />
      </Link>
      <div className='header__login'>
        <LoginForm
          />
      </div>
    </div>
  )
}

export default HeaderHome
