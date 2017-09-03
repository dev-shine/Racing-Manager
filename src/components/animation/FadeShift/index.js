import React from 'react'

import Animate from 'components/animation/Animate'

const FadeShift = (props) => {
  const {
    children
  } = props

  return (
    <Animate
      name='fade-shift'>
      {children}
    </Animate>
  )
}

export default FadeShift