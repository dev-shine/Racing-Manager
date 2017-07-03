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
import FilterPanel from 'components/searchandfilter/FilterPanel'

/**
 *  @module classNames
 */
import classNames from 'classnames'

/**
 *  @module searchHorses
 */
import { searchHorses } from 'actions/browsehorses'

/**
 *  @module AjaxLoader
 */
import AjaxLoader from 'components/ajaxloader'

/**
 *  @module debounce
 */
import debounce from 'utils/debounce'

export class BrowseHorses extends Component {
  constructor (props) {
    super(props)

    // Initial state
    this.state = {
      filterOpen: false,
      filtering: {
        ownershipType: {
          fixedPeriod: false,
          openEndedPeriod: false
        },
        numberOfYears: 1,
        racingHistory: {
          raced: false,
          unraced: false
        },
        ageOfHorse: {
          '0-2': false,
          '3-5': false,
          olderHorse: false
        },
        racingType: {
          nationalHunt: false,
          flatRacing: false,
          dualPurpose: false
        },
        monthlyCostPerShare: {
          min: 0,
          max: 20000
        }
      },
      searching: {
        value: ''
      },
      sorting: {
        value: 'price lowest to highest'
      },
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

  onSearchUpdate (value) {
    this.setState({
      searching: {
        value
      }
    }, () => {
      this.debouncedSearch()
    })
  }

  onSelectUpdate (value) {
    this.setState({
      sorting: {
        value
      }
    }, () => {
      this.debouncedSearch()
    })
  }

  searchForHorses () {
    this.setState({
      searchingHorses: true
    })

    const payload = this.state.payload

    searchHorses(payload)
    .then(({resultsAmount, results}) => {
      this.setState({
        resultsAmount,
        results,
        searchingHorses: false
      })
    })
    .catch(error => {
      console.error(error)
      this.setState({
        searchingHorses: false
      })
    })
  }

  render () {
    const {
      filterOpen,
      sorting,
      searching,
      sortOptions,
      resultsAmount,
      results,
      searchingHorses
    } = this.state

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
            defaultSortValue={sorting.value}
            onSearchUpdate={this.onSearchUpdate}
            onSelectUpdate={this.onSelectUpdate}
            searchValue={searching.value}
          />
          <div className='container'>
            {
              filterOpen && <FilterPanel />
            }
            <div className={modifiedClassGalleryCols}>
              <HorseCardGallery
                data={results}
              />
            </div>
          </div>
          { searchingHorses && <AjaxLoader /> }
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
  return {}
}

/**
 *  mapDispatchToProps
 *  @param  {Function} dispatch
 *  @param  {Object} ownProps
 *  @return {Object}
 */
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

export default (connect(
  mapStateToProps,
  mapDispatchToProps
)(BrowseHorses))
