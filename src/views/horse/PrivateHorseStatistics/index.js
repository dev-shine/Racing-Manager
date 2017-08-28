import React, { Component } from 'react'

import { connect } from 'react-redux'

import { fetchHorseInfo, clearHorseData } from 'actions/horse'

import HorseHero from 'components/horse/HorseHero'
import HorseNavBar from 'components/horse/HorseNavBar'
import HorseTable from 'components/horse/HorseTable'

import View from 'components/routing/View'

import capitalize from 'utils/capitalize'

import {
  tableStatistics,
  tableEntries,
  tableResults
} from 'data/horse'

class PrivateHorseStatistics extends Component {
  componentDidMount () {
    this.props.getHorseInfo()
  }

  componentWillUnmount () {
    this.props.clearHorseData()
  }

  render () {
    const {
      data,
      match
    } = this.props

    return (
      <View title={capitalize(data.name)} notPrefixed>
        <div className='horse-statistics'>
          <HorseHero
            data={data} />

          <HorseNavBar
            name={match.params.name} />

          <div className='container'>
            <div className='horse-statistics__section'>
              <HorseTable
                title='Ranking'
                data={tableStatistics} />
            </div>

            <div className='horse-statistics__section'>
              <HorseTable
                title='Future Entries'
                data={tableEntries} />
            </div>

            <div className='horse-statistics__section'>
              <HorseTable
                title='Results'
                data={tableResults} />
            </div>

          </div>
        </div>
      </View>
    )
  }
}

const mapStateToProps = ({ horse }) => ({
  ...horse.horseInfo
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateHorseStatistics)
