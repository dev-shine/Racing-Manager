/**
 *  @module react
 */
import React from 'react'

/**
 *  @module Button
 */
import Button from 'components/buttons/Button/Button'

const headerContentClass = 'header__content'

export default [
  {
    paths: ['/'],
    getContent: (props = {}) => {
      const { handleRegister } = props
      return <div className={headerContentClass}>
        <Button
          className='header__register-button visible-sm-up'
          handleClick={handleRegister}
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
