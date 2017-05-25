/**
 *  @module react
 */
import React from 'react'

/**
 * @module Header
 */
import Header from 'containers/header'

/**
 * @module Footer
 */
import Footer from 'components/footer'

/**
 * @module react-router
 */
import { Route } from 'react-router-dom'

/**
 * @name Main layout
 * @return {React.Component}
 */
export const Main = ({component: Component, ...props}) => (
  <Route { ...props } render={ matchProps => (
    <div className='main-layout'>
      <Header />
      <div className='content'>
        <Component {...matchProps} />
      </div>
      <Footer />
    </div>
  )} />
)

/**
 *  @module Main
 */
export default Main
