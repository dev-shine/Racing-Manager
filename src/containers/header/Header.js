/**
 *  @module react
 */
import React, { Component } from 'react'

/**
 * @module react-redux
 */
import { connect } from 'react-redux'

/**
 *  @module Header
 */
import HeaderComponent from 'components/header/Header'

/**
 *  @class
 *  @extends { Component }
 *  @description - Header container, rendering a header component and dealing with logic
 */
export class Header extends Component {
  /**
   *  @constructor
   *  @param { object } props
   */
  constructor (props) {
    super(props)
  }
  render () {
    const { location } = this.props
    return (
      <HeaderComponent
        location={location}
        logohref='#/'
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    location: state.window.location
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

/**
 *  Export the header
 */

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
