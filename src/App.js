/**
 * @module react
 */
import React from 'react'

/**
 * @module react-dom
 */
import { render } from 'react-dom'

/**
 * @module react-redux
 */
import { Provider } from 'react-redux'

/**
 * @module router
 */
import router from 'config/router'

/**
 * @module store
 */
import store from 'store/store'

/**
 *  queryBySelector
 */
import { queryBySelector } from 'utils/domutils'

/**
 * @module styles
 */
import 'styles/index.scss'

/**
 * @module injectTapEventPlugin
 */
import injectTapEventPlugin from 'react-tap-event-plugin'

// Initialise for tap events
injectTapEventPlugin()

/**
 * Render the app
 */
render(
  <Provider store={store}>
    { router }
  </Provider>,

  queryBySelector('.main-container')
)
