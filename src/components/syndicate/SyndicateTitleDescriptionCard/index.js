import React from 'react'

import classNames from 'utils/classnames'

import Separator from 'components/gui/Separator'

import PropTypes from 'prop-types'

const SyndicateTitleDescriptionCard = (props) => {
  const {
    className,
    title,
    description
  } = props

  const modifiedClassNames = classNames('syndicate-title-desc-card', className)

  return (
    <div className={modifiedClassNames}>
      <h1 className='uppercase'>
        {title}
      </h1>
      <Separator modifier='blue' />
      <p className='tiny'>
        {description}
      </p>
    </div>
  )
}

SyndicateTitleDescriptionCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
}

export default SyndicateTitleDescriptionCard
