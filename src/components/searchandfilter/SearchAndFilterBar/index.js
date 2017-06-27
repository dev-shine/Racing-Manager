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
 *  @module Select
 */
import Select from 'components/input/Select'

/**
 *  @module Icon
 */
import Icon from 'components/icon'

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
            <div className='col-md-5 align-middle search-filter-bar__search-container'>
              <SearchInput
                name='search'
                placeholder={placeholder} />
            </div>
            <div className='col-sm-3 col-sm-push-1 col-md-3 col-md-push-1 align-middle'>
              <Select
                title={sortTitle}>
                <option value='lowest to highest'>lowest to highest</option>
                <option value='highest to lowest'>highest to lowest</option>
              </Select>
            </div>
            <div className='col-sm-3 col-sm-push-1 col-md-3 col-md-push-1 align-middle text-center'>
              <h5 className='uppercase search-filter-bar__filter-text'>
                filter the {resultsAmount} results
              </h5>
              <Icon
                className='search-filter-bar__dropdown'
                modifier='dropdown'/>
            </div>
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
