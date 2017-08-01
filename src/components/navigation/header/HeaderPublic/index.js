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

import LoginFormContainer from 'containers/LoginForm'

import TextCtaButton from 'components/buttons/TextCtaButton'

import { CSSTransitionGroup } from 'react-transition-group'

import Icon from 'components/icon'

const HeaderPublic = (props) => {
  const {
    onLoginButtonClick,
    showLogin
  } = props

  return (
    <div className='header__content'>
      <div className='visible-sm-up'>
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
      </div>
      <div className='hidden-sm-up'>
        <div className='header__search'>
          <Link to='/browse-horses'>
            <Icon
              modifier='magnifying-glass' />
          </Link>
        </div>
        <div className='header__search' onClick={onLoginButtonClick}>
          <Icon
            modifier='account' />
        </div>
      </div>

      <div className='hidden-sm-up'>
        <CSSTransitionGroup
          transitionName="fade-in"
          transitionAppearTimeout={400}
          transitionEnterTimeout={400}
          transitionLeaveTimeout={400}>
          {
            showLogin && (
              <div className='header__mobile-register section-shadow'>
                <Link to='/register'>
                  <TextButton
                    className='header__register-button'
                    modifier='md'
                    text='register free' />
                </Link>
              </div>
            )
          }
        </CSSTransitionGroup>
      </div>

      <div>
        <CSSTransitionGroup
          transitionName="fade-in"
          transitionAppearTimeout={400}
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

export default HeaderPublic
