import React from 'react'

import { CSSTransitionGroup } from 'react-transition-group'

const FadeIn = (props) => {
  const {
    children
  } = props

  return (
    <CSSTransitionGroup
      transitionName="fade-shift"
      transitionEnterTimeout={400}
      transitionAppearTimeout={400}
      transitionLeaveTimeout={400}
    >
       <div>
        {children}
      </div>
    </CSSTransitionGroup>
  )
}

export default FadeIn
