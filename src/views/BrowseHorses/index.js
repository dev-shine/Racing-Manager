/**
 *  @module React, Component
 */
import React, { Component } from 'react'

/**
 *  @module connect
 */
import { connect } from 'react-redux'

/**
 *  @module View
 */
import View from 'components/common/View'

/**
 *  @module title
 */
import { BROWSE_HORSES as title } from 'data/titles'

/**
 *  @module TitleHero
 */
import TitleHero from 'components/common/TitleHero'

/**
 *  @module HorseCardGallery
 */
import HorseCardGallery from 'components/cards/HorseCardGallery'

/**
 *  @module SearchAndFilterBar
 */
import SearchAndFilterBar from 'components/searchandfilter/SearchAndFilterBar'

/**
 *  @module FilterPanel
 */
import FilterPanel from 'components/browsehorses/FilterPanel'

/**
 *  @module classNames
 */
import classNames from 'classnames'

/**
 *  @module debounce
 */
import debounce from 'utils/debounce'

import {
  requestFilteredHorses
} from 'actions/browsehorses'

const getSortValue = name => {
  switch (name) {
    case 'price lowest to highest':
      return {
        'field': 'monthlyCost',
        'order': 'asc'
      }
    case 'price highest to lowest':
      return {
        'field': 'monthlyCost',
        'order': 'desc'
      }

    case 'shares lowest to highest':
      return {
        'field': 'sharesAvailable',
        'order': 'asc'
      }

    case 'shares highest to lowest':
      return {
        'field': 'sharesAvailable',
        'order': 'desc'
      }

    default:
      return ''
  }
}

const constructPayload = (opts, applyFilters) => {
  return Object.keys(opts).reduce((obj, item) => {
    if (item === 'query') {
      obj[item] = opts[item]
    } else
    if (item === 'sortValue' && opts[item]) {
      obj['sort'] = getSortValue(opts[item])
    } else
    if (item === 'ownershipType' && applyFilters) {
      const value = opts[item].value
      if (value) {
        obj.filter.push({
          field: item,
          value: opts[item].value
        })
      }
    } else
    if (item === 'numberOfYears' && applyFilters) {
      obj.filter.push({
        'field': item,
        'value': opts[item].value
      })
    } else
    if (item === 'racingHistory' && applyFilters) {
      const value = opts[item].value
      if (value) {
        obj.filter.push({
          field: item,
          value: opts[item].value
        })
      }
    } else
    if (item === 'age' && applyFilters) {
      const value = opts[item].value
      if (value.min !== 0 && value.max !== 0) {
        obj.filter.push({
          field: item,
          value: opts[item].value
        })
      }
    } else
    if (item === 'racingType' && applyFilters) {
      const value = opts[item].value
      if (value) {
        obj.filter.push({
          field: item,
          value: opts[item].value
        })
      }
    } else
    if (item === 'monthlyCostPerShare' && applyFilters) {
      const value = opts[item].value

      obj.filter.push({
        'field': 'monthlyCost',
        'range': {
          'min': value[0],
          'max': value[1]
        }
      })
    }

    return obj
  }, {
    filter: []
  })
}

export class BrowseHorses extends Component {
  constructor (props) {
    super(props)

    // Initial state
    this.state = {
      filterOpen: false,
      ownershipType: {
        fixedPeriod: false,
        openEndedPeriod: false,
        value: ''
      },
      numberOfYears: {
        value: 1,
        min: 1,
        max: 1000
      },
      racingHistory: {
        raced: false,
        unraced: false,
        value: ''
      },
      age: {
        'young': false,
        'adult': false,
        'old': false,
        value: {
          min: 0,
          max: 0
        }
      },
      racingType: {
        nationalHunt: false,
        flatRacing: false,
        dualPurpose: false,
        value: ''
      },
      monthlyCostPerShare: {
        min: 0,
        max: 20000,
        value: [0, 20000]
      },
      query: '',
      sortValue: 'price lowest to highest',
      sortOptions: [
        'price lowest to highest',
        'price highest to lowest',
        'shares lowest to highest',
        'shares highest to lowest'
      ],
      resultsAmount: 0,
      results: [],
      searchingHorses: false
    }

    // Bind custom Fn
    this.searchForHorses = this.searchForHorses.bind(this)
    this.toggleFilter = this.toggleFilter.bind(this)
    this.onOwnerShipChange = this.onOwnerShipChange.bind(this)
    this.onNumberOfYearsChange = this.onNumberOfYearsChange.bind(this)
    this.onRacingHistoryChange = this.onRacingHistoryChange.bind(this)
    this.onAgeChange = this.onAgeChange.bind(this)
    this.onRacingTypeChange = this.onRacingTypeChange.bind(this)
    this.onMonthlyCostPerShareChange = this.onMonthlyCostPerShareChange.bind(this)
    this.onSearchUpdate = this.onSearchUpdate.bind(this)
    this.onSelectUpdate = this.onSelectUpdate.bind(this)
    this.debouncedSearch = debounce(this.searchForHorses, 500)
  }

  componentWillMount () {
    this.searchForHorses()
  }

  toggleFilter () {
    this.setState((state) => ({
      filterOpen: !state.filterOpen
    }))
  }

  /**
   *  onOwnerShipChange
   *  @description Will invert the ownership values
   *  @param  {String} name
   */
  onOwnerShipChange (name) {
    const {
      ownershipType
    } = this.state

    /*
    ILIYAN DONT KILL ME WHEN YOU SEE THIS I WILL REFACTOR THIS STUFF NEXT SPRINT!!!!
     */
    const reduced = Object.keys(ownershipType).reduce((obj, item) => {
      if (item === name) {
        obj[item] = !ownershipType[item]
        if (obj[item]) {
          obj['value'] = item === 'fixedPeriod' ? 'fixed period' : item === 'openEndedPeriod' ? 'open Ended Period' : ''
        } else {
          obj['value'] = ''
        }
      } else {
        if (item !== 'value') obj[item] = false
      }

      return obj
    }, {})

    this.setState({
      ownershipType: {
        ...reduced
      }
    }, () => {
      this.debouncedSearch()
    })
  }

  /**
   *  onNumberOfYearsChange
   *  @param  {Number} value
   */
  onNumberOfYearsChange (value) {
    this.setState({
      numberOfYears: {
        ...this.state.numberOfYears,
        value
      }
    }, () => {
      this.debouncedSearch()
    })
  }

  /**
   *  onRacingHistoryChange
   *  @param  {String} name
   *  @param  {Boolean} value
   */
  onRacingHistoryChange (name, value) {
    const {
      racingHistory
    } = this.state

    /*
    ILIYAN DONT KILL ME WHEN YOU SEE THIS I WILL REFACTOR THIS STUFF NEXT SPRINT!!!!
     */
    const reduced = Object.keys(racingHistory).reduce((obj, item) => {
      if (item === name) {
        obj[item] = !racingHistory[item]
        // obj['value'] = item
        if (obj[item]) {
          obj['value'] = {
            hasBeenRaced: item === 'raced'
          }
        } else {
          obj['value'] = ''
        }
      } else {
        if (item !== 'value') obj[item] = false
      }

      return obj
    }, {})

    this.setState({
      racingHistory: {
        ...reduced
      }
    }, () => {
      this.debouncedSearch()
    })
  }

  /**
   *  onAgeChange
   *  @param  {String} name
   *  @param  {Boolean} value
   */
  onAgeChange (name, value) {
    const {
      age
    } = this.state

    /*
    ILIYAN DONT KILL ME WHEN YOU SEE THIS I WILL REFACTOR THIS STUFF NEXT SPRINT!!!!
     */
    const reduced = Object.keys(age).reduce((obj, item) => {
      if (item === name) {
        obj[item] = !age[item]

        let value = {}

        if (obj[item]) {
          if (item === 'young') {
            value = {
              min: 0,
              max: 2
            }
          } else
          if (item === 'adult') {
            value = {
              min: 3,
              max: 5
            }
          } else
          if (item === 'old') {
            value = {
              min: 6
            }
          }
        }

        obj['value'] = value
      } else {
        if (item !== 'value') obj[item] = false
      }

      return obj
    }, {})

    this.setState({
      age: {
        ...reduced
      }
    }, () => {
      this.debouncedSearch()
    })
  }

  /**
   *  onRacingTypeChange
   *  @param  {String} name
   *  @param  {Boolean} value
   */
  onRacingTypeChange (name, value) {
    const {
      racingType
    } = this.state

    /*
    ILIYAN DONT KILL ME WHEN YOU SEE THIS I WILL REFACTOR THIS STUFF NEXT SPRINT!!!!
     */
    const reduced = Object.keys(racingType).reduce((obj, item) => {
      if (item === name) {
        obj[item] = !racingType[item]
        // obj['value'] = item
        if (obj[item]) {
          obj['value'] = item === 'nationalHunt' ? 'National Hunt' : item === 'flatRacing' ? 'Flat Racing' : item === 'dualPurpose' ? 'Dual Purpose' : ''
        } else {
          obj['value'] = ''
        }
      } else {
        if (item !== 'value') obj[item] = false
      }

      return obj
    }, {})

    this.setState({
      racingType: {
        ...reduced
      }
    }, () => {
      this.debouncedSearch()
    })
  }

  /**
   *  onMonthlyCostPerShareChange
   *  @param  {Array} value
   */
  onMonthlyCostPerShareChange (value) {
    this.setState({
      monthlyCostPerShare: {
        ...this.state.monthlyCostPerShare,
        value
      }
    }, () => {
      this.debouncedSearch()
    })
  }

  /**
   *  onSearchUpdate
   *  @description Will update the query for searching
   *  @param  {String} value
   */
  onSearchUpdate (value) {
    this.setState({
      query: value
    }, () => {
      this.debouncedSearch()
    })
  }

  /**
   *  onSearchUpdate
   *  @description Will update the sort value for sorting
   *  @param  {String} value
   */
  onSelectUpdate (value) {
    this.setState({
      sortValue: value
    }, () => {
      this.debouncedSearch()
    })
  }

  searchForHorses () {
    this.setState({
      searchingHorses: true
    })

    const {
      ownershipType,
      numberOfYears,
      racingHistory,
      age,
      racingType,
      monthlyCostPerShare,
      query,
      sortValue,
      filterOpen
    } = this.state

    const payload = constructPayload({
      ownershipType,
      numberOfYears,
      racingHistory,
      age,
      racingType,
      monthlyCostPerShare,
      query,
      sortValue
    }, filterOpen)

    // Make a call to the backend to retrieve filtered horses.
    this.props.requestFilteredHorses(payload)
  }

  render () {
    const {
      filterOpen,
      ownershipType,
      numberOfYears,
      racingHistory,
      age,
      racingType,
      monthlyCostPerShare,
      query,
      sortValue,
      sortOptions,
      resultsAmount,
      results
    } = this.state

    // Filter opts for the filter panel
    const filterOpts = {
      ownershipType,
      numberOfYears,
      racingHistory,
      age,
      racingType,
      monthlyCostPerShare
    }

    const modifiedClassGalleryCols = classNames('browse-horses__grid', 'col-xs-12')

    return (
      <View title={title}>
        <div className='browse-horses'>
          <TitleHero />
          <SearchAndFilterBar
            resultsAmount={resultsAmount}
            onFilterClick={this.toggleFilter}
            filterActive={filterOpen}
            placeholder='Search horses, trainer or syndicates'
            selectOptions={sortOptions}
            defaultSortValue={sortValue}
            onSearchUpdate={this.onSearchUpdate}
            onSelectUpdate={this.onSelectUpdate}
            searchValue={query}
          />
          <div className='container'>
            <FilterPanel
              isOpen={filterOpen}
              filterOpts={filterOpts}
              onOwnerShipChange={this.onOwnerShipChange}
              onNumberOfYearsChange={this.onNumberOfYearsChange}
              onRacingHistoryChange={this.onRacingHistoryChange}
              onAgeChange={this.onAgeChange}
              onRacingTypeChange={this.onRacingTypeChange}
              onMonthlyCostPerShareChange={this.onMonthlyCostPerShareChange} />
            <div className={modifiedClassGalleryCols}>
              <HorseCardGallery
                data={results}
              />
            </div>
          </div>
        </div>
      </View>
    )
  }
}

/**
 *  mapStateToProps
 *  @param  {Object} state
 *  @param  {Object} ownProps
 *  @return {Object}
 */
const mapStateToProps = (state, ownProps) => {
  const {
    results,
    fetchingHorses,
    resultsAmount
  } = state.browseHorses

  return {
    results,
    fetchingHorses,
    resultsAmount
  }
}

/**
 *  mapDispatchToProps
 *  @param  {Function} dispatch
 *  @param  {Object} ownProps
 *  @return {Object}
 */
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestFilteredHorses: () => {
      return dispatch(requestFilteredHorses())
    }
  }
}

export default (connect(
  mapStateToProps,
  mapDispatchToProps
)(BrowseHorses))
