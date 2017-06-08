/**
 * @module react
 */
import React from 'react'

/**
 * @module react-router-dom
 */
import { BrowserRouter as Routes, Switch } from 'react-router-dom'

/**
 * @module ScrollTop
 */
import ScrollTop from 'utils/scrolltop'

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
  <Routes>
    <ScrollTop>
      <Switch>
        <Main exact path='/' component={Home} />
        <Main exact path='/register' component={Register} />
        <Main exact path='/horse/:name' component={HorseOverview} />
      </Switch>
    </ScrollTop>
  </Routes>
)

/**
 *  @module router
 */
export default router
