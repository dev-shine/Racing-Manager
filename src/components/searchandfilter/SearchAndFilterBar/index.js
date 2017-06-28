/**
 *  @module React, Component
 */
import React, { Component } from 'react'

/**
 *  @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 *  @module SearchInput
 */
import SearchInput from 'components/input/SearchInput'

/**
 *  @module SortSelect
 */
import SortSelect from 'components/input/SortSelect'

/**
 *  @module Icon
 */
import Icon from 'components/icon'

/**
 *  @module MediaQuery
 */
import MediaQuery from 'react-responsive'

/**
 *  @name SearchAndFilterBar
 *  @class
 *  @extends {Component}
 */
class SearchAndFilterBar extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const {
      placeholder,
      sortTitle,
      resultsAmount
    } = this.props

    return (
      <div className='search-filter-bar section-shadow--bottom'>
        <div className='container'>
          <div className='row relative'>
            <div className='col-md-5 align-middle search-filter-bar__mobile-search'>
              <SearchInput
                name='search'
                containerClassName='search-filter-bar__search-input'
                placeholder={placeholder} />
            </div>
            <MediaQuery minWidth={768}>
              <div className='col-xs-push-2 col-sm-4 col-sm-push-2 col-md-3 col-md-push-1 align-middle'>
                <SortSelect
                  title={sortTitle}>
                  <option value='lowest to highest'>lowest to highest</option>
                  <option value='highest to lowest'>highest to lowest</option>
                </SortSelect>
              </div>
            </MediaQuery>
            <MediaQuery minWidth={768}>
              <div className='col-xs-push-2 col-sm-push-3 col-md-3 col-md-push-1 text-center align-middle'>
                <h5 className='uppercase search-filter-bar__filter-text'>
                  filter the {resultsAmount} results
                </h5>
                <Icon
                  className='search-filter-bar__dropdown'
                  modifier='dropdown'/>
              </div>
            </MediaQuery>
            {/* Mobile */}
            <MediaQuery maxWidth={767}>
              <div>
                <h5 className='uppercase search-filter-bar__filter-text'>
                  filter
                </h5>
                <SortSelect
                  title={sortTitle}>
                  <option value='lowest to highest'>lowest to highest</option>
                  <option value='highest to lowest'>highest to lowest</option>
                </SortSelect>
              </div>
            </MediaQuery>
          </div>
        </div>
      </div>
    )
  }
}

SearchAndFilterBar.propTypes = {
  resultsAmount: PropTypes.number,
  placeholder: PropTypes.string,
  sortTitle: PropTypes.string
}

SearchAndFilterBar.defaultProps = {
  resultsAmount: 0,
  placeholder: '',
  sortTitle: 'sort:'
}

/**
 *  @module SearchAndFilterBar
 */
export default SearchAndFilterBar
