/**
 * @module react
 */
import React from 'react'

/**
 * @module react-router
 */
import { Route } from 'react-router'

/**
 * @module react-router-dom
 */
import { HashRouter } from 'react-router-dom'

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
}, false)

/**
 * App router
 */
const router = (
  <HashRouter onUpdate={handleRouterUpdate}>
    <Main>
      <Route exact path='/' component={Home} />
      <Route exact path='/register' component={Register} />
    </Main>
  </HashRouter>
)

export default router
