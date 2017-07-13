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
  requestFilteredHorses,
  requestSearchFiltersIfNeeded,
  toggleHorseFilterPanel,
  updateHorseSeachQuery,
  updateHorseSort
} from 'actions/browsehorses'

export class BrowseHorses extends Component {
  constructor (props) {
    super(props)
  }

  componentWillMount () {
    this.props.requestSearchFiltersIfNeeded()
  }

  render () {
    const {
      query,
      filterOpen,
      resultsAmount,
      toggleHorseFilterPanel,
      updateHorseSeachQuery,
      updateHorseSort,
      results,
      attributes,
      sort
    } = this.props

    const modifiedClassGalleryCols = classNames('browse-horses__grid', 'col-xs-12')

    const noop = () => {}

    return (
      <View title={title}>
        <div className='browse-horses'>
          <TitleHero />
          <SearchAndFilterBar
            resultsAmount={resultsAmount}
            onFilterClick={toggleHorseFilterPanel}
            filterActive={filterOpen}
            placeholder='Search horses, trainer or syndicates'
            selectOptions={attributes.sort}
            defaultSortValue={sort.displayName || 'Recommended'}
            onSearchUpdate={updateHorseSeachQuery}
            onSelectUpdate={updateHorseSort}
            searchValue={query}
          />
          <div className='container'>
            <FilterPanel
              filterOpts={attributes.filter || []}
              isOpen={filterOpen}
              onOwnerShipChange={noop}
              onNumberOfYearsChange={noop}
              onRacingHistoryChange={noop}
              onAgeChange={noop}
              onRacingTypeChange={noop}
              onMonthlyCostPerShareChange={noop}
            />
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
const mapStateToProps = (state, ownProps) => ({
  ...state.browseHorses
})

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
    },
    requestSearchFiltersIfNeeded: () => {
      return dispatch(requestSearchFiltersIfNeeded())
    },
    toggleHorseFilterPanel: () => {
      return dispatch(toggleHorseFilterPanel())
    },
    updateHorseSeachQuery: (query) => {
      return dispatch(updateHorseSeachQuery(query))
    },
    updateHorseSort: (name) => {
      return dispatch(updateHorseSort(name))
    }
  }
}

export default (connect(
  mapStateToProps,
  mapDispatchToProps
)(BrowseHorses))
