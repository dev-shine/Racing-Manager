import React, {Component} from 'react'
import StatisticsTableHOC from '../StatisticsTableHOC'
import {connect} from 'react-redux'
import {fetchHorseStatisticsResults} from 'actions/horse'
import HorseTable from 'components/horse/HorseStatisticsTable'

class HorseStatisticsResults extends Component {
  componentDidMount () {
    const {
      fetchHorseStatisticsResults,
      match: {params: {slug}}
    } = this.props
    fetchHorseStatisticsResults(slug)
  }

  render () {
    const {results} = this.props

    return (
      <HorseTable
        title='Results'
        data={results} />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    results: state.horse.horseInfo.statisticsResults
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchHorseStatisticsResults: (slug) => {
      dispatch(fetchHorseStatisticsResults(slug))
    }
  }
}

export default StatisticsTableHOC(connect(
  mapStateToProps,
  mapDispatchToProps
)(HorseStatisticsResults))
