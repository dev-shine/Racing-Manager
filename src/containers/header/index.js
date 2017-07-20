import React, { PureComponent } from 'react'

/**
 *  @module Header
 */
import Header from 'components/header'

/**
 *  @module HeaderHome
 */
import HeaderHome from 'components/header/HeaderHome'

/**
 *  @module HeaderHome
 */
import HeaderDashboard from 'components/header/HeaderDashboard'

/**
 *  @module withRouter
 */
import {
  withRouter,
  Switch
} from 'react-router-dom'

/**
 *  @module RouteWithProps
 */
import RouteWithProps from 'components/common/RouteWithProps'

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
    return (
      <Header
        logohref='/'>
          <Switch>
            <RouteWithProps
              exact
              path='/'
              onLoginButtonClick={this.toggleLogin}
              showLogin={this.state.showLogin}
              burgerMenuActive={this.state.burgerMenuActive}
              onClick={() => { this.setState({burgerMenuActive: !this.state.burgerMenuActive}) }}
              component={HeaderHome} />
            <RouteWithProps
              component={HeaderDashboard} />
          </Switch>
      </Header>
    )
  }
}

export default withRouter(HeaderContainer)
