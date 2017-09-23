/**
 *  @module React, Component
 */
import React, { Component } from 'react'

/**
 *  @module Connect
 */
import { connect } from 'react-redux'

/**
 *  @module NewsTile
 */
import NewsTile from 'components/news/NewsTile'

/**
 *  @module TextButton
 */
import TextButton from 'components/buttons/TextButton'

/**
 *  @module HeaderSection
 */
import HeaderSection from 'components/dashboard/HeaderSection'

/**
 *  @module Block, Grid
 */
import { Block, Grid } from 'components/layouts/masonry'

/**
 *  @module getDashboard
 */
import { getDashboard } from 'actions/dashboard'

import {
  fetchNewsIfNeeded
} from 'actions/news'

import View from 'components/routing/View'

import { MEMBER_DASHBOARD as title } from 'data/titles'

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
    this.props.fetchNewsIfNeeded()
  }

  render () {
    const { tiles, dashboardData, fetching } = this.props
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
              <Grid
                targetBlockWidth={265}
                center={false}
                maxColumns={4}>
                {
                  tiles.map((tile, index) => (
                    <Block width={1} key={index}>
                      <NewsTile
                        id={index}
                        rootPath={''}
                        text={tile.headline}
                        src={tile.thumbnailImage}
                        providerSrc={tile.thumbnailImage}
                        date={tile.timeStamp}
                        className='member-dashboard__tile'
                      />
                    </Block>
                  ))
                }
              </Grid>
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
    dashboard,
    news
  } = state

  const {
    member
  } = dashboard

  const {
    data
  } = news

  return {
    dashboardData: member.data,
    fetching: member.fetching,
    tiles: data
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getDashBoardData: () => {
      return dispatch(getDashboard())
    },
    fetchNewsIfNeeded: () => {
      return dispatch(fetchNewsIfNeeded())
    }
  }
}

export default (connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberDashboard))
