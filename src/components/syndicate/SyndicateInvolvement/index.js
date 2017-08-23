import React from 'react'

import classNames from 'utils/classnames'

import PropTypes from 'prop-types'

import Separator from 'components/gui/Separator'

import List from 'components/gui/List'

const SyndicateInvolvement = (props) => {
  const {
    className,
    title,
    benefits
  } = props

  const modifiedClassNames = classNames('syndicate-involvement', className)

  return (
    <div className={modifiedClassNames}>
      <h2 className='uppercase'>
        {title}
      </h2>
      <Separator modifier='white' />
      <List items={benefits} />
    </div>
  )
}

SyndicateInvolvement.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string
}

SyndicateInvolvement.defaultProps = {
  title: 'Availability'
}

export default SyndicateInvolvement
