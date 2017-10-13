import React, { Component } from 'react'

import { connect } from 'react-redux'
import _ from 'lodash'

import { getItem } from 'utils/storageutils'

import { USER_TOKEN } from 'data/consts'

import horseView from 'views/Horse/View'

import HorseHero from 'components/horse/HorseHero'
import HorseNavBar from 'components/horse/HorseNavBar'
import HorseTable from 'components/horse/HorseTable'
import ResultsTableContainer from './ResultsTableContainer'
import { getHorseStatisticsResults } from 'actions/horse'

import {
  tableStatistics,
  tableEntries
} from 'data/horse'

import {
  queryBySelector
} from 'utils/domutils'

const INITIAL_COUNT = 5
const LOADMORE_COUNT = 5

class HorseStatistics extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: INITIAL_COUNT
    }

    this.scrollElementToView = this.scrollElementToView.bind(this)
    this.setResultsData = this.setResultsData.bind(this)
  }

  componentWillMount () {
    const token = getItem(USER_TOKEN)
    this.props.getHorseStatisticsResults(token)
  }

  componentDidMount () {
    // Scroll to ranking table
    this.scrollElementToView()
  }

  setResultsData () {
    this.setState({ count: this.state.count + LOADMORE_COUNT })
  }

  scrollElementToView () {
    setTimeout(() => {
      queryBySelector('#ranking').scrollIntoView({ behavior: 'smooth' })
    }, 0)
  }

  render () {
    const {
      data,
      match
    } = this.props

    let countData = []
    let resultsTableData = {}
    if (this.props.horseStatisticsResultsInfo.data !== null && !_.isEmpty(this.props.horseStatisticsResultsInfo.data) && this.props.horseStatisticsResultsInfo.data.data.length > this.state.count) {
      countData = this.props.horseStatisticsResultsInfo.data.data.slice(0, this.state.count)
    } else {
      countData = this.props.horseStatisticsResultsInfo.data.data
    }

    resultsTableData = {
      titles: this.props.horseStatisticsResultsInfo.data.titles,
      data: countData
    }

    return (
      <div className='horse-statistics'>
        <HorseHero
          data={data} />

        <HorseNavBar
          name={match.params.name} />

        <div className='container'>
          <div className='horse-statistics__section' id='ranking'>
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
            <ResultsTableContainer
              title='Results'
              data={resultsTableData} />
            <div className="loadMore-btn">
              <button onClick={this.setResultsData}>LOAD MORE</button>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

const mapStateToProps = ({horse}) => ({
  horseStatisticsResultsInfo: {
    ...horse.horseStatisticsResultsInfo
  }
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  getHorseStatisticsResults: (token) => {
    const name = ownProps.match.params.name
    return dispatch(getHorseStatisticsResults(token, name))
  }
})

export default horseView(connect(mapStateToProps, mapDispatchToProps)(HorseStatistics))
