/**
 *  @module react
 */
import React from 'react'

/**
 * @module react-redux
 */
import { connect } from 'react-redux'

/**
 *  @module Header
 */
import Header from 'components/header'

/**
 *  @module HeaderContentStates
 */
import headerContentStates from 'containers/header/HeaderContentStates'

const mapStateToProps = (state, ownProps) => {
  const {
    location
  } = state.window

  const content = headerContentStates({
    location,
    onRegister: () => {
      console.log('go to register page.')
    }
  })

  return {
    content,
    logohref: '#/'
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
