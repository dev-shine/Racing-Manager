import React from 'react'

import { CSSTransitionGroup } from 'react-transition-group'

const FadeIn = (props) => {
  const {
    children
  } = props

  return (
    <CSSTransitionGroup
      transitionName="fade-in"
      transitionEnterTimeout={400}
      transitionAppearTimeout={400}
      transitionLeaveTimeout={400}
    >
      {children}
    </CSSTransitionGroup>
  )
}

export default FadeIn
