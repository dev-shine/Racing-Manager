import React from 'react'

import classNames from 'utils/classnames'

import PropTypes from 'prop-types'

import TitleDescriptionSection from 'components/common/TitleDescriptionSection'

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
      <TitleDescriptionSection
        title={title}
        description={description}
        colorModifier='white'
        titleModifier='h2'
      >
        <List items={benefits} />
      </TitleDescriptionSection>
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
  title: 'Join the club',
  description: '',
  benefits: []
}

export default SyndicateInvolvement
