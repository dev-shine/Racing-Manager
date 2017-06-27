/**
 *  @module React
 */
import React, { Component } from 'react'

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
 *  @module classNames
 */
import classNames from 'utils/classnames'

/**
 *  @class
 *  @name SearchInput
 *  @extends {Component}
 */
class SearchInput extends Component {
  constructor (props) {
    super(props)

    // Initial state
    this.state = {
      open: false
    }

    // Bind custom fn
    this.openSearch = this.openSearch.bind(this)
    this.closeSearch = this.closeSearch.bind(this)
  }

  /**
   *  openSearch
   *  @description Will open the search bar on mobile
   */
  openSearch () {
    this.setState({
      open: true
    })
  }

  /**
   *  closeSearch
   *  @description Will close the search bar on mobile.
   */
  closeSearch () {
    this.setState({
      open: false
    })
  }

  render () {
    const {
      open
    } = this.state

    const modifiedClassNames = classNames('search-input', '', {
      'active': open
    })

    const closeModifiedClassNames = classNames('search-input__close-container', 'hidden-sm-up', {
      'active': open
    })

    return (
      <div className={modifiedClassNames}>
        <Icon
          onClick={this.openSearch}
          className='search-input__glass absolute-center-v'
          modifier='magnifying-glass' />
        <Input
          {...this.props} />
        <div className={closeModifiedClassNames}>
          <Icon
            onClick={this.closeSearch}
            className='search-input__close'
            modifier='close'/>
        </div>
      </div>
    )
  }
}

SearchInput.propTypes = {

}

/**
 *  @module SearchInput
 */
export default SearchInput
