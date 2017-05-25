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

/**
 *  @module withRouter
 */
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
  const {
    pathname
  } = ownProps.location

  const content = headerContentStates({
    location: pathname
  })

  return {
    content,
    logohref: '/'
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

/**
 *  Export the header
 */

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Header))
