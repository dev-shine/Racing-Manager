/**
 * @module configureStore
 */
import configureStore from 'store/configureStore'

/**
 * @module initialStore
 */
import initialStore from 'store/initialStore'

/**
 * @type { Store }
 */
const store = configureStore(initialStore)

export default store
