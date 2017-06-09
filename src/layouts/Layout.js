import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

import Default from './Default'

class Layout extends Component {
  render () {
    const { children, history } = this.props
    const { location } = history

    switch (location) {
      default:
        return <Default children={children} />
    }
  }
}

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = (dispatch, ownProps) => ({

})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Layout)
)
