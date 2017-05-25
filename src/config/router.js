/**
 * @module react
 */
import React from 'react'

/**
 * @module react-router-dom
 */
import { BrowserRouter as Router, Switch } from 'react-router-dom'

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
 * App router
 */
const router = (
  <Router>
    <Switch>
      <Main exact path='/' component={Home} />
      <Main exact path='/register' component={Register} />
    </Switch>
  </Router>
)

/**
 *  @module router
 */
export default router
