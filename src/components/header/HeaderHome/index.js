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

import BurgerMenu from 'components/burgermenu'

const HeaderHome = (props) => {
  return (
    <div className='header__content'>
      <Link to='/register'>
        <TextButton
          className='header__register-button visible-sm-up'
          modifier='sm'
          text='Register for FREE' />
      </Link>
      <BurgerMenu
        isActive={props.burgerMenuActive}
        onClick={props.onClick} />
    </div>
  )
}

export default HeaderHome
