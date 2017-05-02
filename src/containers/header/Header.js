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
 *  @module HeaderContentStates
 */
import headerContentStates from 'containers/header/headerContentStates'

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
    let { location } = this.props
    location = location.slice(1)

    let content = null

    headerContentStates.forEach(contentState => {
      if (
        contentState.paths.indexOf(location) >= 0
      ) {
        content = contentState.getContent()
        return false
      }
    })

    return (
      <HeaderComponent
        content={content}
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
