import React from 'react'

import classNames from 'utils/classnames'

import TextIconButton from 'components/buttons/TextIconButton'

import PropTypes from 'prop-types'

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
                <TextIconButton
                  disabled={false}
                  title={title}
                  iconModifier='plus' />
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
