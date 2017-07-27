import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

import Default from './Default'
import BodyStyle from 'components/common/BodyStyle'

import { isTouchDevice } from 'utils/domutils'

/**
 *  Gets the correct layout depending on the pathname
 */
const getLayoutPerRoute = (props) => {
  switch (props.location.pathname) {
    default:
      return <Default children={props.children} />
  }
}

class Layout extends Component {
  render () {
    const { children, history } = this.props
    const { location } = history

    return (
      <BodyStyle className={!isTouchDevice() ? 'no-touch' : ''}>
      {
        getLayoutPerRoute({children, location})
      }
      </BodyStyle>
    )
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
