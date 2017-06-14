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
 *  @class
 *  @name Dashboard
 *  @extends {Component}
 */
export class Dashboard extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { data } = this.props
    const { tiles, horses } = data

    return (
      <div className='dashboard'>
        <div className='dashboard__slider'>
          <HeaderSection
            data={horses}/>
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
      src: '/uploads/1/1496758376165/attachment-1496758376164.jpg',
      providerSrc: '/uploads/1/1496758376165/attachment-1496758376164.jpg',
      date: '2017-06-06T14:11:42.820Z',
    }),
    horses: new Array(5).fill(
      'Tobefair: the Cheltenham favourite owned by 17 regulars of a Pembroke pub',
    )
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
