import React, { Component } from 'react'

import { connect } from 'react-redux'

import View from 'components/routing/View'

import capitalize from 'utils/capitalize'

import { calcPercent } from 'utils/horseutils'

import { roundNumberWithoutZeros } from 'utils/number'

import { fetchHorseInfo, clearHorseData } from 'actions/horse'

import AjaxLoader from 'components/gui/Loaders/Ajaxloader'

import HorsePublicOverview from '../Public/HorsePublicOverview'

import { addToastSuccess, addToastError } from 'actions/toast'

const mapStateToProps = ({ horse, auth }) => ({
  horseInfo: {
    ...horse.horseInfo
  },
  horseStatisticsResultsDetails: {
    ...horse.horseStatisticsResultsDetailsInfo
  },
  horseStatisticsFutureDetails: {
    ...horse.horseStatisticsFutureDetailsInfo
  },
  isLoggedIn: auth.isLoggedIn
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  getHorseInfo: () => {
    const slug = ownProps.match.params.slug
    return dispatch(fetchHorseInfo(slug))
  },
  clearHorseData: () => {
    return dispatch(clearHorseData())
  },
  addToastSuccess: (text) => {
    return dispatch(addToastSuccess(text))
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
        horseStatisticsResultsDetails,
        horseStatisticsFutureDetails,
        getHorseInfo,
        clearHorseData,
        ...restOfProps
      } = this.props

      const {
        data = {},
        ...restOfHorseProps
      } = horseInfo

      const {
        public: isPublic = false
      } = data

      let RenderComponent = WrapperComponent

      if (isPublic) {
        RenderComponent = HorsePublicOverview
      }

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
            <RenderComponent
              data={horseProps}
              {...restOfProps}
              getHorseInfo={getHorseInfo}
              clearHorseData={clearHorseData}
            />
            <AjaxLoader isVisible={horseInfo.fetching || horseStatisticsResultsDetails.fetching || horseStatisticsFutureDetails.fetching} />
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
