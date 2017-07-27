import React, { PureComponent } from 'react'

import PropTypes from 'prop-types'

import TextCtaButton from 'components/buttons/TextCtaButton'

import { Link } from 'react-router-dom'

import enhanceWithClickOutside from 'react-click-outside'

import classNames from 'utils/classnames'

class AccountDropdown extends PureComponent {
  constructor (props) {
    super(props)
  }

  handleClickOutside () {
    this.props.closeAccount()
  }

  render () {
    const {
      onLogout,
      className
    } = this.props

    const modifiedClassNames = classNames('account-dropdown', className)

    return (
      <div className={modifiedClassNames}>
        <ul className='account-dropdown__list no-list-style'>
          <li className='account-dropdown__list-item'>
            <Link to='/user/personal'>
              <TextCtaButton
                modifier='gray'
                className='uppercase semi-bold'
                text={'personal'} />
            </Link>
          </li>

          <li className='account-dropdown__list-item'>
            <Link to='/user/payment'>
              <TextCtaButton
                modifier='gray'
                className='uppercase semi-bold'
                text={'payment'} />
            </Link>
          </li>

          <li className='account-dropdown__list-item'>
            <Link to='/user/security'>
              <TextCtaButton
                modifier='gray'
                className='uppercase semi-bold'
                text={'security'} />
            </Link>
          </li>

          <li className='account-dropdown__list-item'>
            <TextCtaButton
              modifier='gray'
              onClick={onLogout}
              className='uppercase semi-bold italic'
              text={'log out'} />
          </li>
        </ul>
      </div>
    )
  }
}

AccountDropdown.propTypes = {
  onLogout: PropTypes.func.isRequired,
  closeAccount: PropTypes.func.isRequired
}

export default enhanceWithClickOutside(AccountDropdown)
