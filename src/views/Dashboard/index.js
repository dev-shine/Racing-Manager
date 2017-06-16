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
import NewsTile from 'components/tiles/NewsTile'

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
import { Block, Grid } from 'components/masonry'

/**
 *  @module newsImage
 */
import { newsImage } from 'assets/dummyassets'

/**
 * @module post
 */
import { get } from 'api/Request'

/**
 * @module DASHBOARD
 */
import { DASHBOARD } from 'api/ServiceTypes'

/**
 *  @class
 *  @name Dashboard
 *  @extends {Component}
 */
export class Dashboard extends Component {
  constructor (props) {
    super(props)

    // Initial state
    this.state = {
      syndicates: []
    }

    // Bind custom fns
    this.fetchDashboardData = this.fetchDashboardData.bind(this)
  }

  componentWillMount () {
    // Fetch the data.
    this.fetchDashboardData()
  }

  /**
   *  fetchDashboardData
   *  @description Will make an ajax call to get the dashboard data.
   *  @return {Void}
   */
  fetchDashboardData () {
    get({
      url: DASHBOARD
    })
    .then(response => {
      // Successfull.
      this.setState({
        syndicates: response.data.ownership
      })
    })
    .catch(error => {
      console.log(error)
    })
  }

  render () {
    const { data } = this.props
    const { tiles } = data
    const { syndicates } = this.state

    return (
      <div className='dashboard'>
        <div className='dashboard__slider'>
          <HeaderSection
            data={syndicates}/>
        </div>
        <div className='dashboard__feed-section container'>
          <h1 className='dashboard__title'>
            Racing News
          </h1>
          <div className='dashboard__feed'>
            <Grid
              targetBlockWidth={265}
              center={false}
              maxColumns={4}>
              {
                tiles.map((tile, index) => (
                  <Block width={1} key={index}>
                    <NewsTile
                      id={index}
                      rootPath={tile.rootPath}
                      text={tile.text}
                      src={tile.src}
                      providerSrc={tile.providerSrc}
                      date={tile.date}
                      className='dashboard__tile'
                    />
                  </Block>
                ))
              }
            </Grid>
          </div>
          <TextButton
            text='Load more'
            modifier='secondary'
            className='dashboard__more-btn'
            onClick={() => {}}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  // TODO: Use state.dashboardOverview
  data: {
    tiles: new Array(12).fill({
      text: 'Tobefair: the Cheltenham favourite owned by 17 regulars of a Pembroke pub',
      rootPath: '',
      src: newsImage,
      providerSrc: newsImage,
      date: '2017-06-06T14:11:42.820Z'
    })
  }
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getDashboard: () => {},
  }
}

export default (connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard))
