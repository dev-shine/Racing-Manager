import React from 'react'

import classNames from 'utils/classnames'

const SidePanel = (props) => {
  const {
    className
  } = props

  const modifiedClassName = classNames('side-panel', className)

  return (
    <nav role='navigation' className={modifiedClassName}>
      <ul className='side-panel__list no-list-style'>
      </ul>
    </nav>
  )
}

export default SidePanel
