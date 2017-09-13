import React, { Component } from 'react'

import horseView from 'views/Horse/View'

import HorseHero from 'components/horse/HorseHero'
import HorseNavBar from 'components/horse/HorseNavBar'
import HorseTable from 'components/horse/HorseTable'

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

    this.scrollElementToView = this.scrollElementToView.bind(this)
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
            <HorseTable
              title='Results'
              data={tableResults} />
          </div>

        </div>
      </div>
    )
  }
}

export default horseView(HorseStatistics)
