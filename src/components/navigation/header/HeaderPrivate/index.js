/**
 *  @module React
 */
import React from 'react'

import { Link } from 'react-router-dom'

import Icon from 'components/icon'

import AccountDowndown from 'components/navigation/accountdropdown'

import { CSSTransitionGroup } from 'react-transition-group'

import TextCtaButton from 'components/buttons/TextCtaButton'

const HeaderPrivate = (props) => {
  const {
    showAccount,
    onLogout,
    onAccountClick
  } = props

  return (
    <div className='header__content'>
      <div className='header__links'>
        <div className='header__search'>
          <Link to='/browse-horses'>
            <Icon
              modifier='magnifying-glass' />
          </Link>
        </div>

        <div className='header-private__link'>
          <Link to='/dashboard'>
            <TextCtaButton
              modifier='gray'
              className='uppercase semi-bold header-private__link'
              text={'my horses'} />
          </Link>
        </div>

        <div className='header-private__link'>
          <TextCtaButton
            onClick={onAccountClick}
            modifier='gray'
            className='uppercase semi-bold header-private__link'
            text={'account'} />
        </div>
      </div>
      <div>
        <CSSTransitionGroup
          transitionName="fade-in"
          transitionAppearTimeout={400}
          transitionEnterTimeout={400}
          transitionLeaveTimeout={400}>
          {
            showAccount && (
              <AccountDowndown
                className='section-shadow'
                closeAccount={onAccountClick}
                onLogout={onLogout}/>
            )
          }
        </CSSTransitionGroup>
      </div>
    </div>
  )
}

export default HeaderPrivate
