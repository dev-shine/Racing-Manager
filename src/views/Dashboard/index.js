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

    this.state = {
      syndicates: []
    }
  }

  render () {
    const { data } = this.props
    const { tiles, syndicates } = data

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
      date: '2017-06-06T14:11:42.820Z'
    }),
    syndicates: [{
      name: 'The down quay club',
      color: '',
      slug: 'the-down-quay-club',
      horses: [
        {
          '_id': '59401a77371c882d01addc71',
          'name': 'A A BAMBA',
          slug: 'a-a-bamba',
          'age': '28',
          'gender': 'filly',
          'foalingDate': '1989-02-08T00:00:00.000Z',
          'color': 'bay',
          'trainer': {
            'name': 'N. A. Callaghan'
          },
          'dam': {
            'sireName': 'NIJINSKY (CAN)',
            'name': 'ENCHANTING DANCER (FR)'
          },
          'sire': {
            'name': 'SLIP ANCHOR'
          },
          'owner': {
            'name': 'Mr Michael Hill'
          },
          'runs': 15,
          'wins': 1,
          'places': 2,
          'messages': []
        },
        {
          '_id': '59401a77371c882ddfdaddc71',
          'name': 'MR. MAJESTIC',
          slug: 'mr-majestic',
          'age': '30',
          'gender': 'filly',
          'foalingDate': '2012-02-08T00:00:00.000Z',
          'color': 'bay',
          'trainer': {
            'name': 'N. D. DE ROZ'
          },
          'dam': {
            'sireName': 'MRMAJ (CAN)',
            'name': 'MESMORIZING DANCER (DE)'
          },
          'sire': {
            'name': 'DIP ANCHOR'
          },
          'owner': {
            'name': 'Mr Michael Bolton'
          },
          'runs': 12,
          'wins': 5,
          'places': 3,
          'messages': []
        }
      ]
    },
    {
      name: 'The Lunar Happiness',
      color: '',
      slug: 'the-lunar-happiness',
      horses: [
        {
          '_id': '59401a77371c8ddv01addc71',
          'name': 'DUSTY',
          slug: 'dusty',
          'age': '12',
          'gender': 'filly',
          'foalingDate': '1999-02-08T00:00:00.000Z',
          'color': 'bay',
          'trainer': {
            'name': 'B. D. Jones'
          },
          'dam': {
            'sireName': 'SWEET (CAN)',
            'name': 'SWIMMER (FR)'
          },
          'sire': {
            'name': 'BOAT'
          },
          'owner': {
            'name': 'Mr John Mal'
          },
          'runs': 2,
          'wins': 2,
          'places': 2,
          'messages': []
        },
        {
          '_id': '59401a773kkl882ddfdaddc71',
          'name': 'MRS. PASTOR',
          slug: 'mrs-pastor',
          'age': '18',
          'gender': 'filly',
          'foalingDate': '2008-02-08T00:00:00.000Z',
          'color': 'bay',
          'trainer': {
            'name': 'P. D. NIN'
          },
          'dam': {
            'sireName': 'PAS (CAN)',
            'name': 'PAS DANCER (DE)'
          },
          'sire': {
            'name': 'RUN ANCHOR'
          },
          'owner': {
            'name': 'Mrs May Lun'
          },
          'runs': 20,
          'wins': 9,
          'places': 2,
          'messages': []
        }
      ]
    }]
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
