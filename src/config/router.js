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
 *  @module HorseOverview
 */
import HorseOverview from 'views/horseoverview'

/**
 * App router
 */
const router = (
  <Router>
    <Switch>
      <Main exact path='/' component={Home} />
      <Main exact path='/register' component={Register} />
      <Main exact path='/horse/:name' component={HorseOverview} />
    </Switch>
  </Router>
)

/**
 *  @module router
 */
export default router
