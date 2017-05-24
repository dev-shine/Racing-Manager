/**
 *  @module react
 */
import React from 'react'

/**
 *  @module TextButton
 */
import TextButton from 'components/buttons/TextButton'

/**
 *  @name headerContentClass
 *  @const
 *  @type {String}
 */
const headerContentClass = 'header__content'

/**
 *  @name headerContentStates
 *  @const
 *  @type {Array}
 */
const headerContentStates = [
  {
    paths: ['/'],
    getContent: (props = {}) => {
      const { onRegister } = props
      return <div className={headerContentClass}>
        <TextButton
          className='header__register-button visible-sm-up'
          onClick={onRegister}
          modifier='sm'
          text='Register for FREE' />
      </div>
    }
  },
  {
    paths: ['/test'],
    getContent: () => {
      return <p>How awesome is that?</p>
    }
  }
]

export default (props) => {
  let { location } = props
  let result = null
  location = location.slice(1)

  headerContentStates.forEach(contentState => {
    if (contentState.paths.indexOf(location) >= 0) {
      result = contentState.getContent(props)
      return false
    }
  })
  return result
}
