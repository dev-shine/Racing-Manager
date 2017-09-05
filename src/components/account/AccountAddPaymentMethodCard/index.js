import React from 'react'

import classNames from 'utils/classnames'

import TextButton from 'components/buttons/TextButton'

import PropTypes from 'prop-types'

import Icon from 'components/icon'

import {
  CardView,
  CardFrame,
  CardContent
} from 'components/cards/FeaturedCard'

const AccountAddPaymentMethodCard = (props) => {
  const {
    className,
    title
  } = props

  const modifiedClassNames = classNames('account-add-payment-method-card', className)

  return (
    <div className={modifiedClassNames}>
      <CardView>
        <CardFrame borderColor={'transparent'}>
          <CardContent>
            <div className='account-add-payment-method-card__container'>
              <div className='account-add-payment-method-card__button section-shadow--tile'>
                <TextButton
                  modifier='xs'
                  textClassName='lowercase'
                  disabled={false}
                  text={(
                    <span
                      className='inherit'
                    >
                      {title}
                      <Icon
                      className='align-middle account-add-payment-method-card__icon nano'
                      modifier='plus' />
                    </span>
                  )} />
              </div>
            </div>
          </CardContent>
        </CardFrame>
      </CardView>
    </div>
  )
}

AccountAddPaymentMethodCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string
}

AccountAddPaymentMethodCard.defaultProps = {
  title: 'add another'
}

export default AccountAddPaymentMethodCard
