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
import SortSelect, { Option } from 'components/input/SortSelect'

/**
 *  @module Icon
 */
import Icon from 'components/icon'

/**
 *  @module MediaQuery
 */
import MediaQuery from 'react-responsive'

/**
 *  @module classNames
 */
import classNames from 'utils/classnames'

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
      resultsAmount,
      onFilterClick,
      filterActive,
      selectOptions,
      defaultSortValue,
      onSearchUpdate,
      onSelectUpdate
    } = this.props

    const mobileFilterClassNames = classNames('search-filter-bar__filter-text', 'uppercase search-filter-bar__click-text', {
      'active': filterActive
    })

    return (
      <div className='search-filter-bar section-shadow--bottom'>
        <div className='container'>
          <div className='row relative'>
            <div className='col-md-5 align-middle search-filter-bar__mobile-search'>
              <SearchInput
                name='search'
                onChange={onSearchUpdate}
                containerClassName='search-filter-bar__search-input'
                placeholder={placeholder} />
            </div>
            <MediaQuery minWidth={768}>
              <div className='col-xs-push-2 col-sm-4 col-sm-push-2 col-md-3 col-md-push-1 align-middle'>
                <SortSelect
                  onChange={onSelectUpdate}
                  defaultValue={defaultSortValue}
                  title={sortTitle}>
                  {
                    selectOptions.map((value, index) => {
                      return (
                        <Option key={index} value={value}>{value}</Option>
                      )
                    })
                  }
                </SortSelect>
              </div>
            </MediaQuery>
            <MediaQuery minWidth={768}>
              <div className='col-xs-push-2 col-sm-push-3 col-md-3 col-md-push-1 text-center align-middle search-filter-bar__click-text' onClick={onFilterClick}>
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
              <div className='search-filter-bar__mobile'>
                <h5 className={mobileFilterClassNames} onClick={onFilterClick}>
                  filter
                </h5>
                <h5 className='search-filter-bar__filter-text search-filter-bar__filter-text--pipe'>|</h5>
                <SortSelect
                  onChange={onSelectUpdate}
                  mobileText={'Sort by'}
                  className='search-filter-bar__mobile__sort-select'
                  defaultValue={defaultSortValue}
                  title={sortTitle}>
                  {
                    selectOptions.map((value, index) => {
                      return (
                        <Option key={index} value={value}>{value}</Option>
                      )
                    })
                  }
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
  sortTitle: PropTypes.string,
  onFilterClick: PropTypes.func,
  filterActive: PropTypes.bool,
  selectOptions: PropTypes.array,
  defaultSortValue: PropTypes.string,
  onSearchUpdate: PropTypes.func,
  onSelectUpdate: PropTypes.func
}

SearchAndFilterBar.defaultProps = {
  resultsAmount: 0,
  placeholder: '',
  sortTitle: 'sort:',
  filterActive: false,
  selectOptions: []
}

/**
 *  @module SearchAndFilterBar
 */
export default SearchAndFilterBar
