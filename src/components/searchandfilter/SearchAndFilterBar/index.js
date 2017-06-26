/**
 *  @module React
 */
import React from 'react'

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
 *  @name SearchAndFilterBar
 */
const SearchAndFilterBar = (props) => {
  const {
    placeholder,
    sortTitle
  } = props

  return (
    <div className='search-filter-bar section-shadow--bottom'>
      <div className='container'>
        <div className='col-sm-9 align-middle'>
          <div className='row'>
            <div className='col-sm-6'>
              <SearchInput
                placeholder={placeholder} />
            </div>
            <div className='col-sm-5 col-sm-push-1'>
              <Select
                title={sortTitle}>
                <option value='lowest to highest'>lowest to highest</option>
                <option value='highest to lowest'>highest to lowest</option>
              </Select>
            </div>
          </div>
        </div>
        <div className='col-sm-3 align-middle'>
        </div>
      </div>
    </div>
  )
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
