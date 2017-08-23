import React from 'react'

import classNames from 'utils/classnames'

import PropTypes from 'prop-types'

import Separator from 'components/gui/Separator'

import List from 'components/gui/List'

const SyndicateInvolvement = (props) => {
  const {
    className,
    title,
    benefits,
    description
  } = props

  const modifiedClassNames = classNames('syndicate-involvement', className)

  return (
    <div className={modifiedClassNames}>
      <h2 className='uppercase'>
        {title}
      </h2>
      <Separator modifier='white' />
      <p className='horse-header__paragraph syndicate-involvement__desc'>
        {description}
      </p>
      <List items={benefits} />
    </div>
  )
}

SyndicateInvolvement.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  benefits: PropTypes.arrayOf(PropTypes.string)
}

SyndicateInvolvement.defaultProps = {
  title: 'Availability',
  description: '',
  benefits: []
}

export default SyndicateInvolvement
