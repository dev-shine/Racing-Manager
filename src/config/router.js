/**
 * @module react
 */
import React from 'react'

/**
 * @module react-router-dom
 */
import { HashRouter, Switch } from 'react-router-dom'

/**
 * @module Main
 */
import Main from 'layouts/main'

/**
 * @module Home
 */
import Home from 'views/home'

/**
 * @module Register
 */
import Register from 'views/register'

/**
 * @module store
 */
import store from '../store'

/**
 * @module locationChange
 */
import { locationChange } from 'actions/window'

/**
 * Handle router update
 * @type { Function }
 * @returns { void }
 */
const handleRouterUpdate = () => window.scrollTo(0, 0)

// Temporary solution for redux-router-4 bug with location change
window.addEventListener('hashchange', () => {
  store.dispatch(locationChange(window.location.hash))

  // handle the route update.
  handleRouterUpdate()
}, false)

/**
 * App router
 */
const router = (
  <HashRouter>
    <Switch>
      <Main exact path='/' component={Home} />
      <Main exact path='/register' component={Register} />
    </Switch>
  </HashRouter>
)

export default router
