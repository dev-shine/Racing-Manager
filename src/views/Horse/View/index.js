import React, { Component } from 'react'

import { connect } from 'react-redux'

import View from 'components/routing/View'

import capitalize from 'utils/capitalize'

import { calcPercent } from 'utils/horseutils'

import { roundNumberWithoutZeros } from 'utils/number'

import { fetchHorseInfo, clearHorseData } from 'actions/horse'

import AjaxLoader from 'components/gui/Loaders/Ajaxloader'

const mapStateToProps = ({ horse }) => ({
  horseInfo: {
    ...horse.horseInfo
  }
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  getHorseInfo: () => {
    const name = ownProps.match.params.name
    return dispatch(fetchHorseInfo(name))
  },
  clearHorseData: () => {
    return dispatch(clearHorseData())
  }
})

const HorseViewHoc = (WrapperComponent) => {
  class HorseView extends Component {
    constructor (props) {
      super(props)
    }

    componentDidMount () {
      this.props.getHorseInfo()
    }

    componentWillUnmount () {
      this.props.clearHorseData()
    }

    render () {
      const {
        horseInfo,
        ...restOfProps
      } = this.props

      const {
        data = {},
        ...restOfHorseProps
      } = horseInfo

      const {
        name = '',
        owner = {},
        description,
        shares = {
          owned: 0,
          total: 0
        },
        messages = [],
        ...restOfHorseData
      } = data

      const { slug } = owner

      const syndicateLink = `/syndicate/${slug}`

      const eachShare = roundNumberWithoutZeros(
        calcPercent(1, shares.total)
      )

      const percentShares = roundNumberWithoutZeros(
        calcPercent(shares.owned, shares.total)
      )

      const horseProps = {
        name,
        owner,
        description,
        shares,
        messages,
        syndicateLink,
        eachShare,
        percentShares,
        ...restOfHorseProps,
        ...restOfHorseData
      }

      return (
        <View title={capitalize(name || '')} notPrefixed>
          <div>
            <WrapperComponent
              data={horseProps}
              {...restOfProps}
            />
            <AjaxLoader isVisible={horseInfo.fetching} />
          </div>
        </View>
      )
    }
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(HorseView)
}

export default HorseViewHoc
