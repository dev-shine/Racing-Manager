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
  Route,
  withRouter,
  Switch
} from 'react-router-dom'

class HeaderContainer extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Header
        logohref='/'>
          <Switch>
            <Route exact path='/' component={HeaderHome} />
          </Switch>
      </Header>
    )
  }
}

export default withRouter(HeaderContainer)
