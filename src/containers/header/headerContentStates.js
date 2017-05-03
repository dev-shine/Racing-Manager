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
    getContent: () => {
      return <div className={headerContentClass}>
        <Button className="header__register-button"
                text="Register"/>
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
