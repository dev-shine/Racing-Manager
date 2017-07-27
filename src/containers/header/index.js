import React, { PureComponent } from 'react'

/**
 *  @module Header
 */
import Header from 'components/navigation/header'

/**
 *  @module HeaderHome
 */
import HeaderPublic from 'components/navigation/header/HeaderPublic'

/**
 *  @module HeaderPrivate
 */
import HeaderPrivate from 'components/navigation/header/HeaderPrivate'

/**
 *  @module connect
 */
import { connect } from 'react-redux'

/**
 *  @module withRouter
 */
import {
  withRouter
} from 'react-router-dom'

class HeaderContainer extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      burgerMenuActive: true,
      showLogin: false
    }

    this.toggleLogin = this.toggleLogin.bind(this)
  }

  toggleLogin () {
    this.setState((state) => ({
      showLogin: !state.showLogin
    }))
  }

  render () {
    const {
      isLoggedIn
    } = this.props

    return (
      <Header
        logohref='/'>
        {
          isLoggedIn
          ? <HeaderPrivate />
          : <HeaderPublic
              onLoginButtonClick={this.toggleLogin}
              showLogin={this.state.showLogin}
              burgerMenuActive={this.state.burgerMenuActive}
              onClick={() => { this.setState({burgerMenuActive: !this.state.burgerMenuActive}) }} />
        }
      </Header>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer))
