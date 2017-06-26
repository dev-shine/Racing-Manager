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
 *  @name SearchAndFilterBar
 */
const SearchAndFilterBar = (props) => {
  const {
    placeholder
  } = props

  return (
    <div className='search-filter-bar section-shadow--carousel'>
      <div className='container'>
        <div className='col-sm-9'>
          <SearchInput
            placeholder={placeholder} />
        </div>
        <div className='col-sm-3'>
        </div>
      </div>
    </div>
  )
}

SearchAndFilterBar.propTypes = {
  resultsAmount: PropTypes.number,
  placeholder: PropTypes.string
}

SearchAndFilterBar.defaultProps = {
  resultsAmount: 0,
  placeholder: ''
}

/**
 *  @module SearchAndFilterBar
 */
export default SearchAndFilterBar
