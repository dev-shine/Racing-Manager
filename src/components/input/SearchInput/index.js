/**
 *  @module React
 */
import React from 'react'

/**
 *  @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 *  @module Input
 */
import Input from 'components/input/Input'

/**
 *  @module Icon
 */
import Icon from 'components/icon'

/**
 *  @name SearchInput
 */
const SearchInput = props => {
  return (
    <div className='search-input'>
      <Input
        {...props} />
      <Icon
        modifier='magnifying-glass' />
    </div>
  )
}

SearchInput.propTypes = {

}

/**
 *  @module SearchInput
 */
export default SearchInput

