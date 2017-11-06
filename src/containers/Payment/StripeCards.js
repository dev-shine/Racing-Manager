import React, {Component} from 'react'

import { connect } from 'react-redux'

import {fetchCards, deleteCard} from 'actions/account/CreditCard'

import AccountCreditCard from 'components/account/AccountCreditCard'

class StripeCards extends Component {
  render () {
    const {
      cards = [],
      deleteCard
    } = this.props

    return (
      <div className='account-payment-methods__section'>
        <div className='row'>
          {cards.map((card, index) => (
            <div key={`cc_${index}`} className='col-lg-4 col-md-6 col-sm-12 col-xs-12 account-payment-methods__section--bottom'>
              <AccountCreditCard
                cardType={card.brand}
                cardNumber={card.cardNumber}
                expiry={`${card.expiryMonth}/${card.expiryYear}`}
                postCode={card.postcode}
                onDelete={() => deleteCard(card.id)}/>
            </div>
          ))}
        </div>
      </div>
    )
  }

  componentDidMount () {
    this.props.fetchCards()
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCards: () => {
      dispatch(fetchCards())
    },
    deleteCard: (id) => {
      dispatch(deleteCard(id))
    }
  }
}

const mapStateToProps = ({account}, ownProps) => {
  const {
    creditCard
  } = account.addCreditCard

  return {
    cards: creditCard.cards
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StripeCards)
