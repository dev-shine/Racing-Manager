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
import { getHorseStatisticsResults, fetchHorseStatisticsResultsDetailsInfo, fetchHorseStatisticsFutureDetailsInfo } from 'actions/horse'

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
      count: INITIAL_COUNT,
      showResultsDetail: false,
      showFutureDetail: false,
      animateClass: false
    }

    this.scrollElementToView = this.scrollElementToView.bind(this)
    this.showStatisticsResultsDetails = this.showStatisticsResultsDetails.bind(this)
    this.hideStatisticsResultsDetails = this.hideStatisticsResultsDetails.bind(this)
    this.showStatisticsFutureDetails = this.showStatisticsFutureDetails.bind(this)
    this.hideStatisticsFutureDetails = this.hideStatisticsFutureDetails.bind(this)
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

  showStatisticsResultsDetails () {
    if (Object.keys(this.props.horseStatisticsResultsDetails.data).length === 0) {
      this.props.getHorseStatisticsResultsDetailsInfo()
    }
    this.setState({showResultsDetail: true, animateClass: true})
  }

  hideStatisticsResultsDetails () {
    this.setState({showResultsDetail: false, animateClass: true})
  }

  showStatisticsFutureDetails () {
    if (Object.keys(this.props.horseStatisticsFutureDetails.data).length === 0) {
      this.props.getHorseStatisticsFutureDetailsInfo()
    }
    this.setState({showFutureDetail: true, animateClass: true})
  }

  hideStatisticsFutureDetails () {
    this.setState({showFutureDetail: false, animateClass: true})
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
          data={data} />
        {
          (!this.state.showResultsDetail && !this.state.showFutureDetail) || this.props.horseStatisticsResultsDetails.fetching || this.props.horseStatisticsFutureDetails.fetching
            ? <div id="horse-statistics-content" className={this.state.animateClass && (!this.props.horseStatisticsResultsDetails.fetching && !this.props.horseStatisticsFutureDetails.fetching) ? 'fadeInLeft animated' : ''}>
                <div className='container'>
                  <div className='horse-statistics__section' id='ranking'>
                    <HorseTable
                      title='Ranking'
                      data={[]}/>
                  </div>

                  <div className='horse-statistics__section'>
                    <HorseTable
                      title='Future Entries'
                      data={[]}
                      showDataDetails={null/*this.showStatisticsFutureDetails*/}/>
                  </div>

                  <div className='horse-statistics__section'>
                    <ResultsTableContainer
                      title='Results'
                      data={resultsTableData}
                      showDataDetails={null/*this.showStatisticsResultsDetails*/}/>
                    <div className="loadMore-btn">
                      <button onClick={this.setResultsData}>LOAD MORE</button>
                    </div>
                  </div>
                </div>
              </div>
            : null
        }
        {
          this.state.showResultsDetail && !this.props.horseStatisticsResultsDetails.fetching
            ? <div id="horse-statistics-results-details-content" className="fadeInRight animated">
                <div className="container">
                  <div className='horse-statistics__section' id='ranking'>
                    <HorseTable
                    title='RACE RECORD'
                    data={this.props.horseStatisticsResultsDetails.data.form} />
                  </div>

                  <div className='horse-statistics__section'>
                    <HorseTable
                    title='FORM'
                    data={this.props.horseStatisticsResultsDetails.data.raceRecord} />
                  </div>

                  <div className='horse-statistics__section'>
                    <button className="back-btn" onClick={this.hideStatisticsResultsDetails} >BACK</button>
                  </div>
                </div>
              </div>
            : null
        }
        {
          this.state.showFutureDetail && !this.props.horseStatisticsFutureDetails.fetching
            ? <div id="horse-statistics-Future-details-content" className="fadeInRight animated">
                <div className="container">
                  <div className='horse-statistics__section'>
                    <HorseTable
                      title='RACE RECORD'
                      data={this.props.horseStatisticsFutureDetails.data} />
                  </div>

                  <div className='horse-statistics__section'>
                    <button className="back-btn" onClick={this.hideStatisticsFutureDetails} >BACK</button>
                  </div>
                </div>
              </div>
            : null
        }
      </div>
    )
  }
}

const mapStateToProps = function ({horse}) {
  return {
    horseStatisticsResultsInfo: {
      ...horse.horseStatisticsResultsInfo
    },
    horseStatisticsResultsDetails: {
      ...horse.horseStatisticsResultsDetailsInfo
    },
    horseStatisticsFutureDetails: {
      ...horse.horseStatisticsFutureDetailsInfo
    }
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    getHorseStatisticsResultsDetailsInfo: () => {
      const slug = ownProps.match.params.slug
      return dispatch(fetchHorseStatisticsResultsDetailsInfo(slug))
    },
    getHorseStatisticsFutureDetailsInfo: () => {
      const slug = ownProps.match.params.slug
      return dispatch(fetchHorseStatisticsFutureDetailsInfo(slug))
    },
    getHorseStatisticsResults: (token) => {
      const slug = ownProps.match.params.slug
      return dispatch(getHorseStatisticsResults(token, slug))
    }
  }
}

export default horseView(connect(mapStateToProps, mapDispatchToProps)(HorseStatistics))
