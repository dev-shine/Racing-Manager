import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

import Default from './Default'
import Test from './Test'

class Layout extends Component {
  render () {
    const { children, history, testVar } = this.props
    const { location } = history

    switch (location.pathname) {
      case '/test':
        return <Test testVar={testVar} />
      default:
        return <Default children={children} />
    }
  }
}

const mapStateToProps = (state, ownProps) => ({
  testVar: 'Hello world!'
})

const mapDispatchToProps = (dispatch, ownProps) => ({

})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Layout)
)
