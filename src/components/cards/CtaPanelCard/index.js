import React from 'react'

import classNames from 'utils/classnames'

import PropTypes from 'prop-types'

const CtaPanelCard = (props) => {
  const {
    className,
    children
  } = props

  const modifiedClassNames = classNames('cta-panel-card', ['section-shadow section-shadow--tile section-shadow--bottom', className])

  return (
    <div className={modifiedClassNames}>
      {children}
    </div>
  )
}

CtaPanelCard.propTypes = {
  className: PropTypes.string
}

export default CtaPanelCard
