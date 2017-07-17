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
      burgerMenuActive: true
    }
  }

  render () {
    return (
      <Header
        logohref='/'>
          <Switch>
            <RouteWithProps
              exact
              path='/'
              burgerMenuActive={this.state.burgerMenuActive}
              onClick={() => { this.setState({burgerMenuActive: !this.state.burgerMenuActive}) }}
              component={HeaderHome} />
          </Switch>
      </Header>
    )
  }
}

export default withRouter(HeaderContainer)
