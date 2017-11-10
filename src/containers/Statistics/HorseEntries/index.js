import React, {Component} from 'react'
import StatisticsTableHOC from '../StatisticsTableHOC'
import {connect} from 'react-redux'
import {fetchHorseStatisticsEntries} from 'actions/horse'
import HorseTable from 'components/horse/HorseStatisticsTable'

class HorseStatisticsEntries extends Component {
  componentDidMount () {
    const {
      fetchHorseStatisticsEntries,
      match: {params: {slug}}
    } = this.props
    fetchHorseStatisticsEntries(slug)
  }

  render () {
    const {entries} = this.props

    return (
      <HorseTable
        title='Entries'
        data={entries} />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    entries: state.horse.horseInfo.statisticsEntries
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchHorseStatisticsEntries: (slug) => {
      dispatch(fetchHorseStatisticsEntries(slug))
    }
  }
}

export default StatisticsTableHOC(connect(
  mapStateToProps,
  mapDispatchToProps
)(HorseStatisticsEntries))
