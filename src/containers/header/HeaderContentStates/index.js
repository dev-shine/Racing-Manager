/**
 *  @module react
 */
import React from 'react'

/**
 *  @module TextButton
 */
import TextButton from 'components/buttons/TextButton'

/**
 *  @module Link
 */
import { Link } from 'react-router-dom'

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
    paths: [''],
    getContent: (props = {}) => {
      return (
        <div className={headerContentClass}>
          <Link to='/register'>
            <TextButton
              className='header__register-button visible-sm-up'
              modifier='sm'
              onClick={() => {}}
              text='Register for FREE' />
          </Link>
        </div>
      )
    }
  },
  {
    paths: ['/register'],
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
