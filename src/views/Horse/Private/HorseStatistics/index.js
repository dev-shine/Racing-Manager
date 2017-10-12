import React, { Component } from 'react'
import { connect } from 'react-redux'
import horseView from 'views/Horse/View'

import HorseHero from 'components/horse/HorseHero'
import HorseNavBar from 'components/horse/HorseNavBar'
import HorseTable from 'components/horse/HorseTable'
import { fetchHorseStatisticsResultsDetailsInfo, fetchHorseStatisticsFutureDetailsInfo } from 'actions/horse'

import {
  tableStatistics,
  tableEntries,
  tableResults
} from 'data/horse'

import {
  queryBySelector
} from 'utils/domutils'

class HorseStatistics extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showResultsDetail: false,
      showFutureDetail: false,
      animateClass: false
    }

    this.scrollElementToView = this.scrollElementToView.bind(this)
    this.showStatisticsResultsDetails = this.showStatisticsResultsDetails.bind(this)
    this.hideStatisticsResultsDetails = this.hideStatisticsResultsDetails.bind(this)
    this.showStatisticsFutureDetails = this.showStatisticsFutureDetails.bind(this)
    this.hideStatisticsFutureDetails = this.hideStatisticsFutureDetails.bind(this)
  }

  componentDidMount () {
    // Scroll to ranking table
    this.scrollElementToView()
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

    return (
      <div className='horse-statistics'>
        <HorseHero
          data={data} />

        <HorseNavBar
          name={match.params.name} />
        {
          (!this.state.showResultsDetail && !this.state.showFutureDetail) || this.props.horseStatisticsResultsDetails.fetching || this.props.horseStatisticsFutureDetails.fetching
            ? <div id="horse-statistics-content" className={this.state.animateClass && (!this.props.horseStatisticsResultsDetails.fetching && !this.props.horseStatisticsFutureDetails.fetching) ? 'fadeInLeft animated' : ''}>
                <div className='container'>
                  <div className='horse-statistics__section' id='ranking'>
                    <HorseTable
                      title='Ranking'
                      data={tableStatistics}/>
                  </div>

                  <div className='horse-statistics__section'>
                    <HorseTable
                      title='Future Entries'
                      data={tableEntries}
                      showDataDetails={this.showStatisticsFutureDetails}/>
                  </div>

                  <div className='horse-statistics__section'>
                    <HorseTable
                      title='Results'
                      data={tableResults}
                      showDataDetails={this.showStatisticsResultsDetails}/>
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
      const name = ownProps.match.params.name
      return dispatch(fetchHorseStatisticsResultsDetailsInfo(name))
    },
    getHorseStatisticsFutureDetailsInfo: () => {
      const name = ownProps.match.params.name
      return dispatch(fetchHorseStatisticsFutureDetailsInfo(name))
    }
  }
}

export default horseView(connect(mapStateToProps, mapDispatchToProps)(HorseStatistics))
