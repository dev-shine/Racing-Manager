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

import LoginFormContainer from 'containers/login'

import TextCtaButton from 'components/buttons/TextCtaButton'

import { CSSTransitionGroup } from 'react-transition-group'

import Icon from 'components/icon'

const HeaderHome = (props) => {
  const {
    onLoginButtonClick,
    showLogin
  } = props

  return (
    <div className='header__content'>
      <div className='header__search'>
        <Link to='/browse-horses'>
          <Icon
            modifier='magnifying-glass' />
        </Link>
      </div>

      <TextCtaButton
        onClick={onLoginButtonClick}
        className='header__login-button uppercase semi-bold'
        text={'log in'}
        active={!showLogin} />

      <Link to='/register'>
        {
        !showLogin
        ? (
            <TextButton
              className='header__register-button'
              modifier='sm'
              text='register free' />
          )
        : (
            <TextCtaButton
              className='header__register-button uppercase semi-bold'
              text={'register free'} />
          )
        }
      </Link>

      <div className='header__login'>
        <CSSTransitionGroup
          transitionName="fade-in"
          transitionEnterTimeout={400}
          transitionLeaveTimeout={400}>
          {
            showLogin && (
              <LoginFormContainer
                className='section-shadow'
                closeLogin={onLoginButtonClick} />
            )
          }
        </CSSTransitionGroup>
      </div>
    </div>
  )
}

export default HeaderHome
