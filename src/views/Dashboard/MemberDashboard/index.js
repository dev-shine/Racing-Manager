import React, { Component } from 'react'

import { connect } from 'react-redux'

import TextButton from 'components/buttons/TextButton'

import HeaderSection from 'components/dashboard/HeaderSection'

import { getDashboard } from 'actions/dashboard'

import View from 'components/routing/View'

import { MEMBER_DASHBOARD as title } from 'data/titles'

import NewsGallery from 'containers/News/NewsGallery'

/**
 *  @class
 *  @name MemberDashboard
 *  @extends {Component}
 */
export class MemberDashboard extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    this.props.getDashBoardData()
  }

  render () {
    const { dashboardData, fetching } = this.props
    const { ownership } = dashboardData

    return (
      <View title={title}>
        <div className='member-dashboard'>
          <div className='member-dashboard__slider'>
            <HeaderSection
              isFetching={fetching}
              data={ownership} />
          </div>
          <div className='member-dashboard__feed-section container'>
            <h1 className='member-dashboard__title uppercase'>
              Racing News
            </h1>
            <div className='member-dashboard__feed'>
              <NewsGallery />
            </div>
            <TextButton
              text='Load more'
              modifier='secondary'
              className='member-dashboard__more-btn'
              onClick={() => {}}
            />
          </div>
        </div>
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const {
    dashboard
  } = state

  const {
    member
  } = dashboard

  return {
    dashboardData: member.data,
    fetching: member.fetching
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getDashBoardData: () => {
      return dispatch(getDashboard())
    }
  }
}

export default (connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberDashboard))
